import { execSync } from 'node:child_process'
import { unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FIXTURES_DIR = join(__dirname, 'fixtures')

export interface TypePerfMetrics {
  types: number
  instantiations: number
  checkTimeMs: number
  memoryUsedKB: number
  totalTimeMs: number
}

export interface BenchScenario {
  name: string
  files: string[]
}

export const ANILIST_SCHEMA_FILE = '../../playground/gqfn/graphql.anilist.co_rl5865.d.ts'

export const scenarios: Record<string, BenchScenario[]> = {
  'Small Schema': [
    { name: 'baseline (import only)', files: ['schema.ts', 'small-baseline.ts'] },
    { name: 'simple scalar query', files: ['schema.ts', 'small-simple.ts'] },
    { name: 'nested object query', files: ['schema.ts', 'small-nested.ts'] },
    { name: 'complex query (vars + nesting)', files: ['schema.ts', 'small-complex.ts'] },
  ],
  'AniList Schema': [
    { name: 'simple query', files: [ANILIST_SCHEMA_FILE, 'anilist-simple.ts'] },
    { name: 'complex query (FetchAnime)', files: [ANILIST_SCHEMA_FILE, 'anilist-complex.ts'] },
  ],
}

export function measureFixture(files: string[]): TypePerfMetrics {
  const configPath = createTempTsconfig(files)
  try {
    return runTscDiagnostics(configPath)
  }
  finally {
    try {
      unlinkSync(configPath)
    }
    catch {}
  }
}

function createTempTsconfig(files: string[]): string {
  const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const tmpPath = join(FIXTURES_DIR, `_bench_tmp_${id}.json`)
  writeFileSync(tmpPath, JSON.stringify({
    extends: './tsconfig.base.json',
    files,
  }, null, 2))
  return tmpPath
}

function runTscDiagnostics(tsconfigPath: string): TypePerfMetrics {
  try {
    const output = execSync(
      `npx tsc -p "${tsconfigPath}" --noEmit --extendedDiagnostics`,
      { encoding: 'utf-8', cwd: FIXTURES_DIR, stdio: ['pipe', 'pipe', 'pipe'] },
    )
    return parseDiagnostics(output)
  }
  catch (error: any) {
    // tsc may exit non-zero for type errors but still outputs diagnostics
    const output = `${error.stdout || ''}${error.stderr || ''}`
    if (output.includes('Total time:')) {
      return parseDiagnostics(output)
    }
    throw error
  }
}

function parseDiagnostics(output: string): TypePerfMetrics {
  const getNumber = (label: string): number => {
    const match = output.match(new RegExp(`${label}:\\s+([\\d.]+)`))
    return match ? Number.parseFloat(match[1]) : 0
  }

  return {
    types: getNumber('Types'),
    instantiations: getNumber('Instantiations'),
    checkTimeMs: Math.round(getNumber('Check time') * 1000),
    memoryUsedKB: getNumber('Memory used'),
    totalTimeMs: Math.round(getNumber('Total time') * 1000),
  }
}

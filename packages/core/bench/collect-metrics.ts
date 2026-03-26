/* eslint-disable no-console */
import type { TypePerfMetrics } from './helpers'
/**
 * Type Performance Metrics Collection Script
 *
 * Runs tsc --extendedDiagnostics for each benchmark scenario and reports
 * deterministic metrics (type instantiations, types count) alongside timing.
 *
 * Usage: npx tsx bench/collect-metrics.ts
 */
import process from 'node:process'
import { measureFixture, scenarios } from './helpers'

interface ScenarioResult {
  group: string
  name: string
  metrics: TypePerfMetrics
}

function run(): void {
  const results: ScenarioResult[] = []

  for (const [group, items] of Object.entries(scenarios)) {
    console.log(`\n⏳ Measuring: ${group}`)
    for (const scenario of items) {
      process.stdout.write(`  ${scenario.name}...`)
      const metrics = measureFixture(scenario.files)
      results.push({ group, name: scenario.name, metrics })
      console.log(` done (${metrics.totalTimeMs}ms)`)
    }
  }

  console.log('\n')
  printMetricsTable(results)
  printDeltaTable(results)
}

function printMetricsTable(results: ScenarioResult[]): void {
  console.log('═══════════════════════════════════════════════════════════════════════════════')
  console.log(' Type Performance Metrics')
  console.log('═══════════════════════════════════════════════════════════════════════════════')

  const header = padRow(['Scenario', 'Types', 'Instantiations', 'Check (ms)', 'Total (ms)', 'Memory (KB)'])
  console.log(header)
  console.log('─'.repeat(header.length))

  let currentGroup = ''
  for (const r of results) {
    if (r.group !== currentGroup) {
      currentGroup = r.group
      console.log(`  [${currentGroup}]`)
    }
    console.log(padRow([
      `    ${r.name}`,
      String(r.metrics.types),
      String(r.metrics.instantiations),
      String(r.metrics.checkTimeMs),
      String(r.metrics.totalTimeMs),
      String(r.metrics.memoryUsedKB),
    ]))
  }
  console.log('')
}

function printDeltaTable(results: ScenarioResult[]): void {
  // Find baselines (first scenario in each group)
  const baselines = new Map<string, TypePerfMetrics>()
  for (const r of results) {
    if (!baselines.has(r.group)) {
      baselines.set(r.group, r.metrics)
    }
  }

  console.log('═══════════════════════════════════════════════════════════════════════════════')
  console.log(' Delta from Baseline (per group)')
  console.log('═══════════════════════════════════════════════════════════════════════════════')

  const header = padRow(['Scenario', 'Δ Types', 'Δ Instantiations', 'Δ Check (ms)', 'Δ Total (ms)'])
  console.log(header)
  console.log('─'.repeat(header.length))

  let currentGroup = ''
  for (const r of results) {
    if (r.group !== currentGroup) {
      currentGroup = r.group
      console.log(`  [${currentGroup}]`)
    }
    const baseline = baselines.get(r.group)!
    const dt = r.metrics.types - baseline.types
    const di = r.metrics.instantiations - baseline.instantiations
    const dc = r.metrics.checkTimeMs - baseline.checkTimeMs
    const dtotal = r.metrics.totalTimeMs - baseline.totalTimeMs
    console.log(padRow([
      `    ${r.name}`,
      formatDelta(dt),
      formatDelta(di),
      formatDelta(dc),
      formatDelta(dtotal),
    ]))
  }
  console.log('')
}

function formatDelta(n: number): string {
  if (n === 0) {
    return '0'
  }
  return n > 0 ? `+${n}` : String(n)
}

function padRow(cols: string[]): string {
  const widths = [38, 10, 16, 14, 14, 14]
  return cols.map((c, i) => c.padEnd(widths[i] || 14)).join('')
}

run()

import { addTypeTemplate, updateTemplates } from '@nuxt/kit'

export interface UseTypeVfs<VfsDir extends `types/${string}`> {
  update: (
    filename: `${string}.d.ts`,
    content: string,
  ) => Promise<void>
  resolve: <T extends `${string}.d.ts`>(path: T) => `#build/${VfsDir}/${T}`
}

export function useTypeVfs<TDir extends `types/${string}`>(
  vfsDir: TDir,
): UseTypeVfs<TDir> {
  const map = new Map<string, string>()

  return {
    update: async (name, content) => {
      const filename = `${vfsDir}/${name}` as `${TDir}/${string}.d.ts`
      const exists = map.has(name)
      map.set(name, content)

      if (exists) {
        updateTemplates({
          filter: ({ filename: f }) => f === filename,
        })
        return
      }

      addTypeTemplate({
        filename,
        getContents: () => {
          return map.get(filename) ?? content
        },
      })
    },

    resolve: path => `#build/${vfsDir}/${path}`,
  }
}

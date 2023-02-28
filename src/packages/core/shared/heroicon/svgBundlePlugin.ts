import glob from 'glob'
import fs from 'fs'
import path from 'path'
import type { Plugin, EmittedAsset } from 'rollup'
import { optimize, Config } from 'svgo'

interface SvgBundleOptions {
  entry: { [id: string]: string }
  svgo: Config
}

export default function svgBundle (options: SvgBundleOptions): Plugin {
  return {
    name: 'svg-bundle-plugin',
    async buildStart () {
      return await Promise.all(Object.keys(options.entry)
        .map(async name => await new Promise<void>((resolve, reject) => {
          const file: EmittedAsset = {
            type: 'asset',
            name: `${name}.svg`,
            fileName: `@camina-core/icons/${name}.svg`,
            source: ''
          }
          let content = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">'
          const addAsset: () => void = () => this.emitFile(file)

          const dir = options.entry[name]
          glob(`${dir}/*.svg`, {}, function (er: Error | null, files: string[]) {
            if (er != null) {
              reject(er)
              return
            }

            files.forEach(f => {
              const buff = fs.readFileSync(f)
              const svg = buff.toString()
              content += svg.replace(/<svg.*>/, `<g id='${path.basename(f, '.svg')}'>`).replace(/<\/svg>/, '</g>')
            })

            content += '</svg>'

            const optimized = optimize(content, options.svgo)

            file.source = optimized.data
            addAsset()
            resolve()
          })
        })))
    }
  }
}

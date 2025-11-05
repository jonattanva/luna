import * as esbuild from 'esbuild'

const loader = {
  '.js': 'jsx',
}

const entry = (entry, callback) => {
  const base = {
    bundle: true,
    entryPoints: [entry],
    external: ['zod'],
    loader,
    logLevel: 'info',
    minify: false,
  }

  const build = async (format, path) => {
    if (format === 'esm') {
      return await esbuild.build({
        ...base,
        format,
        splitting: true,
        outdir: path,
      })
    }

    if (format === 'cjs') {
      return await esbuild.build({
        ...base,
        format,
        outfile: `${path}/index.js`,
      })
    }
  }
  callback(build)
}

entry('./packages/luna-validator/src/index.ts', async (build) => {
  await build('esm', './dist/luna-validator/esm')
  await build('cjs', './dist/luna-validator/cjs')
})

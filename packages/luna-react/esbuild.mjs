import * as esbuild from 'esbuild'
import pkg from './package.json' with { type: 'json' }

const dependencies = Object.keys(pkg.peerDependencies)

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/server/index.ts'],
  external: dependencies,
  format: 'esm',
  logLevel: 'info',
  minify: false,
  outdir: './dist/server/esm',
  splitting: true,
})

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/server/index.ts'],
  external: dependencies,
  format: 'cjs',
  logLevel: 'info',
  minify: false,
  outdir: './dist/server/cjs',
})

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/client/index.ts'],
  external: dependencies,
  format: 'esm',
  logLevel: 'info',
  minify: false,
  outdir: './dist/client/esm',
  splitting: true,
})

await esbuild.build({
  bundle: true,
  entryPoints: ['./src/client/index.ts'],
  external: dependencies,
  format: 'cjs',
  logLevel: 'info',
  minify: false,
  outdir: './dist/client/cjs',
})

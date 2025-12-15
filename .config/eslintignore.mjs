import { globalIgnores } from 'eslint/config'

export default globalIgnores([
  './turbo',
  'dist/',
  'examples/',
  'node_modules/',
  'packages/**/dist/',
])

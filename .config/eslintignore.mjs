import { globalIgnores } from 'eslint/config'

export default globalIgnores([
  'dist/',
  'examples/',
  'node_modules/',
  'packages/**/dist/',
])

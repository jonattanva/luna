import eslintPlaywright from 'eslint-plugin-playwright'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintTypeScript from 'typescript-eslint'

import eslintignore from './.config/eslintignore.mjs'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintignore,
  ...eslintTypeScript.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintPluginJsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...eslintPluginJsxA11y.flatConfigs.recommended.languageOptions,
      parser: eslintTypeScript.parser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ...eslintPlaywright.configs['flat/recommended'],
    files: ['tests/**'],
    rules: {
      ...eslintPlaywright.configs['flat/recommended'].rules,
    },
  },
])

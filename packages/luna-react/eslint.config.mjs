import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import eslintTypeScript from 'typescript-eslint'

import eslintignore from '../../.config/eslintignore.mjs'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslintignore,

  // TypeScript base rules for all files
  ...eslintTypeScript.configs.recommended,

  // TypeScript strict type-checked rules only for source files
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: eslintTypeScript.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...eslintTypeScript.configs.recommendedTypeChecked[1].rules,
    },
  },

  // React configuration
  {
    files: ['src/**/*.{ts,tsx}'],
    ...eslintReact.configs.flat.recommended,
    languageOptions: {
      ...eslintReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React 17+ JSX Transform - no need to import React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Disable prop-types as we use TypeScript
      'react/prop-types': 'off',

      // Best practices for React libraries
      'react/display-name': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/no-unescaped-entities': 'warn',
      'react/no-unstable-nested-components': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/destructuring-assignment': 'off',
    },
  },

  // React Hooks and React Refresh
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
    },
    rules: {
      // React Hooks rules - critical for correctness
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh - only export components for better HMR
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])

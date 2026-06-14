import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import stylistic from '@stylistic/eslint-plugin'
//import tailwind from 'eslint-plugin-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  //...tailwind.configs['flat/recommended'],

  {
    plugins: {
      '@stylistic': stylistic
    },

    rules: {
      // JavaScript Standard Style-like rules
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'always'],

      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }]
    }
  },

  eslintConfigPrettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])

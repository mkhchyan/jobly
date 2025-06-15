'use strict'
import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import prettier from 'eslint-config-prettier'
import imports from 'eslint-plugin-import'
import promises from 'eslint-plugin-promise'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
// import globals from 'globals'
import tsEslint from 'typescript-eslint'

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [
      '**/node_modules/',
      '**/.pnpm-store/',
      '**/.git*',
      '**/.devcontainer/',
      '**/.dockerignore',
      '**/.next/',
      '**/public/',
    ],
  },
  prettier,
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  imports.flatConfigs.recommended,
  promises.configs['flat/recommended'],
  react.configs.flat.recommended,
  ...tailwindcss.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 'latest',
    },
    settings: {
      react: { version: 'detect' },
      next: { rootDir: '.' },
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
        node: { project: './tsconfig.json' },
      },
      tailwindcss: {
        config: './tailwind.config.ts',
        callees: ['tv', 'cx', 'twMerge'],
      },
    },
    plugins: {
      '@next/next': next,
      'react-hooks': reactHooks,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'import/no-unresolved': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      'tailwindcss/classnames-order': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginReactPerf from 'eslint-plugin-react-perf';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginStorybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules', 'dist', 'coverage', 'storybook-static'] },
  { files: ['**/*.{js,ts,mjs,cjs,jsx,tsx}'] },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  configPrettier,

  {
    name: 'Typescript',
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false },
      ],
    },
  },

  {
    name: 'React',
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      'react-perf': pluginReactPerf,
      'jsx-a11y': pluginJsxA11y,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginReactRefresh.configs.recommended.rules,
      ...pluginReactPerf.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,

      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      'react-perf/jsx-no-new-object-as-prop': 'off',
      'react-perf/jsx-no-new-array-as-prop': 'off',

      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link', 'RouterLink'],
          aspects: ['invalidHref'],
        },
      ],
    },
  },

  {
    name: 'Import Order',
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      ...pluginImport.configs.recommended.rules,

      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '$/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
        },
      ],
      'import/no-cycle': [
        'error',
        {
          maxDepth: '∞',
          ignoreExternal: true,
        },
      ],
    },
  },

  {
    name: 'Storybook',
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook: pluginStorybook,
    },
    rules: {
      ...pluginStorybook.configs.recommended.rules,
      'storybook/hierarchy-separator': 'error',
      'storybook/default-exports': 'off',
    },
  },

  {
    name: 'ESLint + Prettier',
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];

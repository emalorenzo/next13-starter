module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // airbnb rules
    'airbnb',
    // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // eslint react rules (github.com/yannickcr/eslint-plugin-react)

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // accessibility plugin
    'plugin:jsx-a11y/recommended',

    // includes eslint-plugin-react / eslint-plugin-react-hooks / eslint-plugin-next
    // "next/core-web-vitals"
    'plugin:@next/next/recommended',

    // prettier plugin here disables ESLint rules related to code styling that may disagree with prettierrc rules
    // it only turn off rules so it needs to always be at the bottom
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Next.js doesn't require react in scope
    'react/react-in-jsx-scope': 'off',

    // We will use href prop in Next.js's Link component instead of anchor tag
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/no-unescaped-entities': 'off',

    // We turn off prop-types rule, as we will use TypeScript's types instead.
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
  plugins: ['import', '@typescript-eslint', 'react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    // TypeScript needs this to resolve nextjs absolute imports
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
};

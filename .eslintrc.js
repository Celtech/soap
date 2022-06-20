module.exports = {
  root: true,
  settings: {
    'react': {
      version: '16.0',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'tailwindcss': {
      config: 'packages/app/tailwind.config.js',
    },
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: 'packages/api/**/*',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};

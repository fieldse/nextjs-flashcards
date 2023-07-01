module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};

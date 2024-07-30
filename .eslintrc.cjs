module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'storybook-static', 'docs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Keep the rules alphabetized
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': 'off',
    'array-bracket-newline': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'id-length': ['error', { exceptions: ['e', '_', 'x', 'y', 'i'] }],
    'newline-before-return': 'error',
    'no-alert': 'error',
    'no-console': 'warn',
    'no-else-return': 'off',
    'no-nested-ternary': 'error',
    'no-restricted-syntax': [
      'error',
      // ban all enums
      {
        selector: 'TSEnumDeclaration',
        message:
          "Instead of using ENUMs, it's better to opt for objects or types.",
      },
    ],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'error',
    'prefer-object-spread': 'error',
  },
};

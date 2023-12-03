module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // React
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,
    // Material UI
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@mui/*/*/*']
      }
    ],
    // Common
    'no-console': 1, // Disallow the use of console
    'no-lonely-if': 1, // If an if statement is the only statement in the else block, it is often clearer to use an else if form
    'no-unused-vars': 1, // Variables that are declared and not used anywhere in the code
    'no-trailing-spaces': 1, // Disallow trailing whitespace at the end of lines
    'no-multi-spaces': 1, // Disallow multiple spaces
    'no-multiple-empty-lines': 1, // Disallow multiple empty lines
    'space-before-blocks': ['error', 'always'], // Enforce consistent spacing before blocks
    'object-curly-spacing': [1, 'always'], // Enforce consistent spacing inside braces
    'indent': ['warn', 2], // Enforce consistent indentation
    'semi': [1, 'never'], // Semicolon at the end of code line/statement
    'quotes': ['error', 'single'], // Use single quote or double quotes
    'array-bracket-spacing': 1, // Spacing inside array
    'linebreak-style': 0, // Enforce consistent linebreak style
    'no-unexpected-multiline': 'warn', // Disallow confusing multiline expressions
    'keyword-spacing': 1, // Space between the keywords
    'comma-dangle': 1, // Require or disallow trailing commas (ending commas)
    'comma-spacing': 1, // Spacing after a comma
    'arrow-spacing': 1 // Spacing after an arrow (function)
  },
}

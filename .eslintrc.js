module.exports = {
    // This is a fantastic linter from Airbnb
    // It includes linters for React, JSX, Modules, etc. within this plugin
    extends: [
      'plugin:react/recommended',
      'airbnb'
    ],
    // We need 'babel-eslint' for transpilation of features we use that
    // are currently not in the JS language, but in late state proposal
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      es6: true,
      node: true,
      browser: true,
      mocha: true,
      jest: true
    },
    // IMPORTANT NOTE: Please do not add rules by yourself
    rules: {
      'comma-dangle': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/forbid-prop-types': ['error', { forbid: ['any'] }]
    }
};

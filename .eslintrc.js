module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-alert': 0,
    'no-plusplus': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'linebreak-style': 0,
    'max-len': [
      'error',
      80,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/prefer-default-export': 0,
    'no-var': 0,
  },
};

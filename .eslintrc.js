module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:markdown/recommended',
    'plugin:json/recommended',
  ],
  plugins: ['prettier', 'import', 'jest', 'markdown', 'json'],
  rules: {
    eqeqeq: 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'] }],
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'import/order': ['error'],
    'import/first': 'error',
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      extends: ['plugin:yaml/recommended'],
    },
    {
      files: ['*.md', '*.md/*.js'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/all'],
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'warn',
        'jest/prefer-expect-assertions': 'off',
        'jest/no-hooks': [
          'error',
          {
            allow: ['afterEach', 'afterAll', 'beforeEach', 'beforeAll'],
          },
        ],
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: [
              'expect',
              'cy.**.should',
              'cy.matchImageSnapshot',
              'cy.get',
              'cy.visit',
            ],
          },
        ],
      },
    },
  ],
};

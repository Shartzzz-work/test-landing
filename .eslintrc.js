module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // "quotes": ["error", "double"],
    semi: ['error', 'always'],
    // // override configuration set by extending "eslint:recommended"
    // "no-empty": "warn",
    // "no-cond-assign": ["error", "always"],
    // // disable rules from base configurations
    // "for-direction": "off"
  },
};

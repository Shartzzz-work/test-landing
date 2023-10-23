module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        // 'empty-line-between-groups': false,
      },
    ],
    // 'selector-class-pattern': '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    // 'plugin/selector-bem-pattern': {
    //   componentName: '[a-z]+',
    //   componentSelectors: {
    //     initial: '^\\.{componentName}(?:-[a-z]+)?$',
    //     combined: '^\\.combined-{componentName}-[a-z]+$',
    //   },
    //   utilitySelectors: '^\\.util-[a-z]+$',
    // },
    'color-named': 'always-where-possible',
    'max-nesting-depth': 5,
    'selector-max-compound-selectors': 6,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
    'selector-max-id': 2,
    'no-extra-semicolons': true,
  },
};

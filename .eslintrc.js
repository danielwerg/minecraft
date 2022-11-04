module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    amd: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'import'],
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',
    // '@typescript-eslint/class-literal-property-style': 'off', // TODO
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'warn',
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    // '@typescript-eslint/consistent-type-assertions': 'off', // TODO
    // '@typescript-eslint/consistent-type-definitions': 'off', // TODO
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    // '@typescript-eslint/consistent-type-imports': 'off', // TODO
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    // 'dot-location': 'warn',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off', // TODO
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // TODO
    // 'func-call-spacing': 'off',
    // '@typescript-eslint/func-call-spacing': 'warn',
    // indent: 'off',
    // '@typescript-eslint/indent': ['warn', 2],
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'error',
    // 'keyword-spacing': 'off',
    // '@typescript-eslint/keyword-spacing': 'warn'
    // '@typescript-eslint/lines-between-class-members': 'off', // TODO
    '@typescript-eslint/member-delimiter-style': 'warn',
    // '@typescript-eslint/member-ordering': 'off', // TODO
    // '@typescript-eslint/method-signature-style': 'off', // TODO adjacent-overload-signatures
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variableLike',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    // '@typescript-eslint/no-array-constructor': 'off', // TODO
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'warn',
      { ignoreArrowShorthand: true, ignoreVoidOperator: true }
    ],
    '@typescript-eslint/no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    'no-empty': 'warn',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    'arrow-parens': ['warn', 'as-needed'],
    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': 'warn',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: true
      }
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'off', // TODO
    '@typescript-eslint/no-this-alias': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    // '@typescript-eslint/no-type-alias': 'off', // TODO
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'off', // related: prefer-optional-chain
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', // related: no-non-null-assertion
    // 'object-curly-spacing': 'off',
    // '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'off', // TODO
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // TODO
    // '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // '@typescript-eslint/promise-function-async': 'error', // TODO enable later, lazy to fix
    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true
      }
    ],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    // 'no-return-await': 'off',
    // '@typescript-eslint/return-await': 'error', // TODO
    // semi: 'off',
    // '@typescript-eslint/semi': 'warn',
    // '@typescript-eslint/sort-type-union-intersection-members': 'warn', // TODO
    // 'space-before-blocks': 'off',
    // '@typescript-eslint/space-before-blocks': 'warn',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn',
    // 'space-infix-ops': 'off',
    // '@typescript-eslint/space-infix-ops': 'warn',
    // '@typescript-eslint/strict-boolean-expressions': 'off', // TODO
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // '@typescript-eslint/triple-slash-reference': 'off', // TODO
    // '@typescript-eslint/type-annotation-spacing': 'warn',
    // '@typescript-eslint/typedef': 'off', // TODO
    // '@typescript-eslint/unbound-method': 'off', // TODO
    '@typescript-eslint/unified-signatures': 'warn',

    // 'key-spacing': 'warn',
    // 'no-multiple-empty-lines': ['warn', { max: 1 }],
    // 'no-floating-decimal': 'warn',
    // 'no-multi-spaces': 'warn',
    // 'no-whitespace-before-property': 'warn',
    // 'object-property-newline': 'warn',
    // 'padded-blocks': 'warn',
    // 'rest-spread-spacing': ['warn', 'never'],
    // 'space-in-parens': ['error', 'never'],
    // 'template-curly-spacing': 'warn',
    eqeqeq: 'error',
    'no-unneeded-ternary': 'warn',
    'no-useless-computed-key': 'warn',
    yoda: ['warn', 'never', { exceptRange: true }],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          'internal',
          ['sibling', 'parent', 'index']
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal'
          },
          {
            pattern: '@*',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['~/**', '@*']
      }
    ]
  }
};

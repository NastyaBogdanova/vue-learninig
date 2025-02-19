import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
      'object-curly-spacing': ['warn', 'always'],
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'class-methods-use-this': 'off',
      'no-useless-constructor': 'off',
      'no-param-reassign': ['error', {
        props: false
      }],
      'no-underscore-dangle': 0,
      'no-trailing-spaces': ['error', {
        skipBlankLines: true,
        ignoreComments: true
      }],
      'linebreak-style': 0,
      'comma-dangle': 0,
      'no-tabs': ['error', {
        allowIndentationTabs: true
      }],
      'no-unused-expressions': ['error', {
        allowTernary: true
      }],
      indent: 0,
      'no-plusplus': 'off',
      'max-len': ['error', {
        code: 150,
        ignoreComments: true
      }],
      'vue/no-v-html': 'error',
      'vue/dot-notation': 'off',
      'vue/attributes-order': ['error', {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }],
      'vue/attribute-hyphenation': 'off',
      'vue/valid-template-root': 'off',
      'vue/no-multiple-template-root': 'off',
      camelcase: 'off'
    },
  }
];
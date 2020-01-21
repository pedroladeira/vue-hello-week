module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "rules": {
    "comma-dangle": 0,
    "no-console": "warn",
    "no-debugger": "error",
    "vue/html-indent": ["error", "tab"],
    "vue/html-closing-bracket-newline": "off",
    "no-extra-semi": "error",
    "semi": ["error", "always"],
    "indent": [1, "tab"],
    "no-tabs": "off",
    "padded-blocks": ["error", {
      "blocks": "never"
    }],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    "quotes": ["error", "single"],
    "no-undef": "off"

  },
  "parserOptions": {
    "parser": "babel-eslint",
    "no-console": "warn"
  }
}

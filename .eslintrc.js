const path = require("path");
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:@shopify/typescript", "plugin:@shopify/react", "plugin:@shopify/node", "plugin:@shopify/prettier", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "@typescript-eslint/eslint-plugin"],
  rules: {
    "import/no-default-export": ["error"],
    "func-style": "off",
    "no-process-env": "off",
    "no-warning-comments": "off",
    "no-negated-condition": "off",
    "no-console": "error",
    "consistent-return": "off",
    "match-default-export-name": "off",
    "jsx-use-translation-function": "off",
    "lines-around-comment": ["error", {
      beforeBlockComment: false,
      allowBlockStart: false
    }],
    "@babel/no-unused-expressions": "off",
    "import/named": "off",
    "import/no-default-export": ["off"],
    "import/no-anonymous-default-export": "off",
    "import/order": ["error", {
      "newlines-between": "always",
      pathGroups: [{
        pattern: "@/**",
        group: "parent"
      }]
    }],
    "react/button-has-type": "off",
    "react/no-array-index-key": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unsafe": ["error", {
      checkAliases: true
    }],
    "react/react-in-jsx-scope": "off",
    "@shopify/jsx-no-complex-expressions": "off",
    "@shopify/jsx-prefer-fragment-wrappers": "off",
    "@shopify/no-ancestor-directory-import": "off",
    "@shopify/react-prefer-private-members": "off",
    "@shopify/strict-component-boundaries": "off",
    "@shopify/jsx-no-hardcoded-content": "off",
    "@typescript-eslint/array-type": ["error", {
      default: "array"
    }],
    "@typescript-eslint/naming-convention": "off",
    "jsx-a11y/label-has-for": [2, {
      required: {
        some: ["nesting", "id"]
      },
      allowChildren: false
    }],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    "import/no-extraneous-dependencies": ["error", {
      packageDir: [__dirname, process.cwd(), path.resolve(__dirname, "../../")]
    }]
  },
  overrides: [{
    files: ["src/**/*.stories.tsx"],
    rules: {
      "import/no-default-export": ["off"]
    }
  }]
};
module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:solid/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:github/recommended",
        "plugin:sonarjs/recommended",
        "plugin:eslint-plugin/recommended",
        "plugin:react-redux/recommended",
        "plugin:custom-elements/recommended",
        "plugin:css-modules/recommended",
        "plugin:unicorn/recommended",
        "plugin:markdown/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:pii/recommended",
        "plugin:no-unsanitized/DOM",
        "plugin:security/recommended",
        "plugin:xss/recommended",
        "optimize-regex/recommended",
        "plugin:jsonc/base",
        "perf-standard",
        "next",
        "prettier",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "@emotion",
        "react-redux",
        "@html-eslint",
        "sonarjs",
        "pii",
        "xss",
        "no-unsanitized",
        "optimize-regex",
        "@shopify/assemblyscript",
        "solid",
        "no-secrets",
        "markdown",
        "html",
        "deprecation",
        "disable",
        "deprecate",
        "css-modules",
        "unicorn",
        "github",
        "@typescript-eslint"
    ],
    "processor": "disable/disable",
    "overrides": [
        {
          "files": ["*.test.ts"],
          "settings": {
            "disable/plugins": ["react"]
          }
        },
        {
            files: ["*.html"],
            parser: "@html-eslint/parser",
            extends: ["plugin:@html-eslint/recommended"],
          },
      ],
    "rules": {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",
        "prettier/prettier": "error",
        "@emotion/pkg-renaming": "error",
        "deprecate/rule-name": "error",
        "deprecation/deprecation": "warn",
        "perf-standard/no-instanceof-guard": 2,
        "perf-standard/no-self-in-constructor": 2,
        "perf-standard/check-function-inline": 1,
        "no-secrets/no-secrets":"error"
    },
    "settings": {
        "html/html-extensions": [".html", ".we"],  // consider .html and .we files as HTML
        "html/xml-extensions": [".html"],  // consider .html files as XML
        "html/indent": ["0", "tab", "+2"], // code should start at the beginning of the line (no initial indentation), indentation is one tab at the beginning of the line or the <script> indentation plus two spaces.
        "html/report-bad-indent": "error",
        "html/javascript-tag-names": ["script", "customscript"],
        "html/javascript-mime-types": ["text/javascript", "text/jsx"],  // also use script tags with a "text/jsx" type attribute
        "tailwindcss": {
            // These are the default values but feel free to customize
            "callees": ["classnames", "clsx", "ctl"],
            "config": "tailwind.config.js",
            "cssFiles": [
                "**/*.scss",
              "**/*.css",
              "!**/node_modules",
              "!**/.*",
              "!**/dist",
              "!**/build",
            ],
            "cssFilesRefreshRate": 5_000,
            "removeDuplicates": true,
            "skipClassAttribute": false,
            "whitelist": [],
            "tags": [],
            "classRegex": "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
          },
    }
};
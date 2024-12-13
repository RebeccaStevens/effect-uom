// @ts-check
import rsEslint from "@rebeccastevens/eslint-config";

export default rsEslint(
  {
    projectRoot: import.meta.dirname,
    mode: "library",
    typescript: {
      unsafe: "off",
    },
    formatters: true,
    functional: "recommended",
    jsonc: true,
    markdown: true,
    stylistic: true,
    yaml: true,
  },
  {
    rules: {
      // Use non-sloppy imports. See: https://jsr.io/docs/publishing-packages#relative-imports
      "import/extensions": [
        "error",
        "always",
        {
          checkTypeImports: true,
          ignorePackages: true,
        },
      ],
      "import/no-useless-path-segments": ["error", { noUselessIndex: false }],
      "ts/naming-convention": "off",
    },
  },
);

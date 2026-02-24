import antfu from "@antfu/eslint-config";

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
    },
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    ignores: ["public/**", "storybook-static/**", ".agents/**", ".cursor/**", "icons/**", "*.d.ts"],
  },
  {
    rules: {
      "no-console": "off",
      "vue/block-order": ["error", {
        order: ["template", "script", "style", "route"],
      }],
    },
  },
);

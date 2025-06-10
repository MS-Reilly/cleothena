// .storybook/main.js
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook configuration object
 * For details, see:
 * https://storybook.js.org/docs/react/configure/overview
 * https://storybook.js.org/docs/react/builders/vite
 */
const config = {
  stories: [
    // Adjust as needed:
    "../src/**/*.mdx",
    "../src/component/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/component/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/component/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  /**
   * The key part: use viteFinal to merge any custom Vite config.
   * We add the vite-plugin-svgr plugin here so that .svg files
   * become React components.
   */
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      plugins: [
        svgr({
          // The defaults are often enough, but you could customize:
          include: "**/*.svg",
          exclude: "**/*.svg?url",
        }),
      ],
    });
  },
};

export default config;

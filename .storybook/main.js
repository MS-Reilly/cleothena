/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    
    // Remove any existing SVGR rule if present
    config.module.rules = config.module.rules.filter(rule => {
      return !(rule.test && rule.test.toString().includes('svg'));
    });

    // Add a rule to handle SVGs as asset resources (URL strings)
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource', // webpack 5 way to emit files and return their URL
    });

    return config;
  },
};

export default config;

const path = require("path");

module.exports = {
  lang: "zh-CN",
  title: "vanilla-ui",
  description: "a web component",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [{ text: "组件库", link: "/components/button" }],
    sidebar: ["/components/button/README.md", "/components/space/README.md"],
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
  },
  plugins: [
    ["@vuepress/plugin-search"],
    ["@vuepress/plugin-back-to-top"],
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
  alias: {
    utils: path.join(__dirname, "../../utils"),
    styles: path.join(__dirname, "../../styles"),
    aria: path.join(__dirname, "../../aria"),
    packages: path.join(__dirname, "../../packages"),
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "vanilla-ui",
      description: "一个 Web Component 组件库",
    },
  },
  bundler: "@vuepress/bundler-vite",
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("v-"),
        },
      },
    },
  },
};

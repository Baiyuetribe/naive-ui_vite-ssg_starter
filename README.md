# Naive-UI + Vite-SSG

vue纯静态网站构建工具，开发体验比Nuxt3快，希望能助力naive-ui开发者适配SSR。

## Usages

```bash
git clone https://github.com/Baiyuetribe/naive-ui_vite-ssg_starter.git
cd naive-ui_vite-ssg_starter
yarn install # or pnpm i
yarn dev # or pnpm dev
```
## Dependencies

- [antfu/vite-ssg](https://github.com/antfu/vite-ssg)
- [TuSimple/naive-ui](https://github.com/TuSimple/naive-ui)
- [Baiyuetribe/naive-ui-like-nuxt3-template](https://github.com/Baiyuetribe/naive-ui-like-nuxt3-template)


## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)

- 📑 [布局系统](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n 国际化开箱即用](./locales)

- 🗒 [Markdown 支持](https://github.com/antfu/vite-plugin-md)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🖨 使用 [vite-ssg](https://github.com/antfu/vite-ssg) 进行服务端生成 (SSG)

- 🦔 使用 [critters](https://github.com/GoogleChromeLabs/critters) 的生成关键 CSS

- 🦾 TypeScript, 当然

- ⚙️ 结合 [GitHub Actions](https://github.com/features/actions)，使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试, [Cypress](https://cypress.io/) 进行 E2E 测试

- ☁️ 零配置部署 Netlify

<br>


### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.esm.dev) - 直接的, 类型安全的, 使用 Composition api 的轻便灵活的 Vue 状态管理
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vue I18n 的 Vite 插件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - 站点地图生成器
- [`@vueuse/head`](https://github.com/vueuse/head) - 响应式地操作文档头信息



## 衍生项目

- [Baiyuetribe/nuxt3-naive-ui-starter](https://github.com/Baiyuetribe/nuxt3-naive-ui-starter)
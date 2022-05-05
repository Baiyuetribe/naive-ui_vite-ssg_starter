import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
export default defineConfig({
  // resolve: {
  //   alias: {
  //     '~/': `${path.resolve(__dirname, 'src')}/`,
  //   },
  // },
  build: {
    outDir: './.vite',
  },  
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs:"pages",
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({ layoutsDirs: "layouts", defaultLayout: "default" }),


    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts', // 目的是避免一些组件提示不存在
    }),

    Components({
      dirs: ['components'], // 指定组件文件夹
      dts: 'components.d.ts',
      extensions: ['vue', 'md', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
      resolvers: [NaiveUiResolver()]
    }),
    // https://github.com/antfu/unplugin-vue-components
    // Components({
    //   // allow auto load markdown components under `./src/components/`
    //   resolvers: [NaiveUiResolver(), VueUseComponentsResolver()],
    //   extensions: ['vue', 'md'],
    //   // allow auto import and register components used in markdown
    //   // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //   include: [/\.vue$/, /\.vue\?vue/,],
    //   dts: 'src/components.d.ts',
    // }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config

    // https://github.com/antfu/vite-plugin-md
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      defaultSFCLang: 'yaml',
      // runtimeOnly: true,
      // compositionOnly: true,
      include: [path.resolve(__dirname, './locales/**')],
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    format: 'cjs', // 特意解决  naive-ui 没有提供对应的 .mjs 模块，而 vite-ssg 默认为 esm 所需的 .mjs 模块
    formatting: 'minify',
    onFinished() { generateSitemap({outDir:'./.vite',}) },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      "naive-ui",
    ],
  },
  // vue.config.js选项
  pages: {
    index: {
      // page 的入口
      entry: './main.js',
      // 模板来源
      template: 'index.html',
    }
  }
  // https://github.com/vitest-dev/vitest
  // vue.config.js选项
})

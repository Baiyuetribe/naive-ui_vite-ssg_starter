import { createI18n } from 'vue-i18n'
import type { UserModule } from './types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      // return [key.slice(14, yaml ? -5 : -4), value.default]
      return [key.slice(11, yaml ? -5 : -4), value.default] // 目录迁移后变更
    }),
)
// 方案二 -- roolup 前提是tsconfig下放入 
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    messages,
  })
  app.use(i18n)
}

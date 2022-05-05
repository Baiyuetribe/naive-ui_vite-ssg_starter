import { setup } from "@css-render/vue3-ssr";
import type { UserModule } from './types'

export const install: UserModule = ({ app, isClient, head }) => {
    if (!isClient && head) {
        const { collect } = setup(app);
        head.addHeadObjs(ref({
            style: [
                {
                    children: collect()
                }
            ]
        }))
    }
}

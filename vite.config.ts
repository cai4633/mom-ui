// vite.config.ts
import type { UserConfig } from "vite"
import vitePluginVuedoc from "vite-plugin-vuedoc"

const config: UserConfig = {
  plugins: [vitePluginVuedoc()],
}

export default config

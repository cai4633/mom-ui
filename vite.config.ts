// vite.config.ts
// baseParse  将模板翻译为AST
// transform  优化AST
// generate   生成可执行代码
// custom-block 是针对于自定义标签（解析<demo></demo>）而言，与文件名无必然联系（xxx.demo.vue和xxx.vue 无本质区别）
import type { UserConfig } from "vite"
import vitePluginVuedoc from "vite-plugin-vuedoc"
import fs from "fs"
import { baseParse, TemplateNode } from "@vue/compiler-core"

const config: UserConfig = {
  plugins: [vitePluginVuedoc()],
  assetsDir: "assets",
  base: "./",
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { path } = options
      const file = fs.readFileSync(path).toString()
      const block: any = baseParse(file).children.find((n: TemplateNode) => n.tag === "demo")
      // 将 "../libs/xxx.vue" 替换成 "mom-ui"
      const main = file
        .split(block.loc.source)
        .join("")
        .trim()
        .replace(/import\s+(\w+)\s+from\s+["']([.]{2}\/libs\/\w+\.vue)["']/g, "import { $1 } from 'mom-ui'")
        .replace(/[.]{2}\/libs\/\w+(?=["'])/g, "mom-ui")

      console.log(main)

      return `export default function (Component){
        Component._source = ${JSON.stringify(main)};
        Component._title = ${JSON.stringify(block.children[0].content)} //必须使用JSON.stringify()转换JS表达式，否则报错
      }`.trim()
    },
  },
}

export default config

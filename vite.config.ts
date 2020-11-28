// vite.config.ts
// baseParse  将模板翻译为AST
// transform  优化AST
// generate   生成可执行代码
import type { UserConfig } from "vite"
import vitePluginVuedoc from "vite-plugin-vuedoc"
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

const config: UserConfig = {
  plugins: [vitePluginVuedoc()],
  vueCustomBlockTransforms:{
    demo:(options)=>{
      const {path} = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find((n:any)=>n.tag==='demo')
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component){
        Component._source = ${
          JSON.stringify(main)
        }
      }`.trim()
      
    }
  }
}

export default config

import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import Cai from "./components/Cai.vue"

import { createRouter, createWebHashHistory } from "vue-router"
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Cai,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount("#app")

import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import NotFound from "./views/NotFound.vue"

import { createRouter, createWebHashHistory } from "vue-router"
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount("#app")

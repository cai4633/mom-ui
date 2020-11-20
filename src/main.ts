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
      children: [
        {
          path: "introduce",
          component: () => import("./components/Introduce.vue"),
        },
        {
          path: "quickstart",
          component: () => import("./components/Quickstart.vue"),
        },
        {
          path: "button",
          component: () => import("./components/Button.vue"),
        },
        {
          path: "switch",
          component: () => import("./components/Switch.vue"),
        },
      ],
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

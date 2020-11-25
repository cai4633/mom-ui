import { createApp } from "vue"
import App from "./App.vue"
import "./index.scss"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import NotFound from "./views/NotFound.vue"
import "github-markdown-css"
import "./common/scss/md-base.scss"
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
          component: async () => import("./markdown/intro.md"),
        },
        {
          path: "quickstart",
          component: async () => import("./markdown/getStarted.md"),
        },
        {
          path: "button",
          component: () => import("./views/button-demo.vue"),
        },
        {
          path: "switch",
          component: () => import("./views/switch-demo.vue"),
        },
        {
          path: "modal",
          component: () => import("./views/modal-demo.vue"),
        },
        {
          path: "tabs",
          component: () => import("./views/tabs-demo.vue"),
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

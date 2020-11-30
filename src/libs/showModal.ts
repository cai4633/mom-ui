import { createApp, h } from "vue"
import Modal from "./Modal.vue"

export interface Props {
  visiable: boolean
  title: string
  message: string
  onok: () => boolean | undefined
  oncancel: () => boolean | undefined
}

//  TODO 如何通过JS渲染组件
const showModal = (options: Omit<Props, "visiable">) => {
  const div = document.createElement("div")
  document.body.appendChild(div)
  const modal = createApp({
    render: () =>
      h(Modal, {
        visiable: true,
        ...options,
        "onUpdate:visiable": (newVal: boolean) => {
          if (!newVal) {
            modal.unmount(div)
            div.remove()
          }
        },
      }),
  })
  modal.mount(div)
}

export { showModal }

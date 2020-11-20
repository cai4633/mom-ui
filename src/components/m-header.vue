<template>
  <header class="m-header">
    <a href="/" title="回到主页" >
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-cai-ui"></use>
      </svg>
    </a>
    <ul>
      <li><a :href="github">Github</a></li>
      <li><a :href="gitee">Gitee</a></li>
      <li><a href="/#/doc">文档</a></li>
    </ul>
  </header>
</template>
<script lang='ts'>
import { config } from '../../config'
export default {
  setup() {
    const { github, gitee } = config
    return { github, gitee }
  }
}
</script>
<style lang="scss">
@import "../common/scss/var.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $color-light;
  padding: 10px 20px;
  .icon {
    $width: 2em;
    width: $width;
    height: $width;
    line-height: 2;
  }
  ul {
    display: flex;
    color: $color;
    li {
      line-height: 1.2;
      padding: 10px;
      margin: 0 10px;
      a {
        padding: 5px;
      }
    }
  }
}
</style>
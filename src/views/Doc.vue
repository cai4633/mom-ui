<template>
  <div class="doc">
    <m-header />
    <div class="main">
      <aside>
        <h2>文档</h2>
        <ul>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/quickstart">快速上手</router-link>
          </li>
        </ul>
        <h2>组件</h2>
        <ul>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">switch组件</router-link>
          </li>
        </ul>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import MHeader from '../components/m-header.vue'

export default {
  components: { MHeader }
}
</script>

<style lang="scss" scoped>
@import "../common/scss/var.scss";
.doc {
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;
  .main {
    display: flex;
    text-align: left;
    height: calc(100% - 61px);
    aside {
      height: 100%;
      overflow: auto;
      .router-link-active {
        background: $linear-gradient;
      }
      h2:first-child {
        margin-top: 0.4em;
      }
      h2 {
        font-size: 1.2em;
        margin: 1em 0 0.2em 0.3em;
      }
      ul {
        li {
          line-height: 1.5;
          a {
            display: block;
            min-width: 8em;
            padding: 0.5em 1.2em;
          }
        }
      }
    }
    main {
      flex: 1;
      overflow: auto;
      box-shadow: inset 0px 0px 2px 0px #ccc;
    }
  }
}
</style>
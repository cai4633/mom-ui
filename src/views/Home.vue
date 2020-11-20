<template>
  <div class="home">
    <div class="ellipse">
      <m-header />
      <div class="title">
        <h1> Cai UI </h1>
        <h2>一个好用的 Vue3 UI 框架</h2>
        <ul>
          <li><a :href="github">Github</a></li>
          <li><a href="/doc">开始</a></li>
        </ul>
      </div>
    </div>
    <main>
      <ul>
        <li class="item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-vue"></use>
          </svg>
          <div class="desc">
            <h3>基于Vue3</h3>
            <p>使用Vue3 Composition API</p>
          </div>
        </li>
        <li class="item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-ts"></use>
          </svg>
          <div class="desc">
            <h3>基于Typescript</h3>
            <p>使用 Typescript 书写</p>
          </div>
        </li>
        <li class="item">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-simple"></use>
          </svg>
          <div class="desc">
            <h3>易用</h3>
            <p>代码简洁、易用</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang='ts'>
import { config } from '../../config'
import MHeader from '../components/m-header.vue'
export default {
  components: {
    MHeader
  },
  setup() {
    const { github, gitee } = config
    return { github, gitee }
  }
}
</script>

<style lang="scss" scoped>
@import "../common/scss/var.scss";
.home {
  width: 100%;
  .ellipse {
    color: $color;
    padding: 0px 0 50px 0;
    background: rgb(211, 249, 246);
    background: $linear-gradient;
    clip-path: ellipse(70% 60% at 50% 30%);
    .title {
      padding: 70px 0;
      h1 {
        font-size: 2.5em;
        margin-bottom: 0.3em;
      }
      > ul {
        margin-top: 1em;
        display: flex;
        justify-content: center;
        align-content: center;
        li {
          background-color: $color;
          margin: 20px;
          a {
            display: block;
            padding: 10px 20px;
            color: #fff;
            height: 1.2em;
            line-height: 1.2;
          }
        }
      }
    }
  }

  main {
    margin-top: 50px;
    ul {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      li {
        display: flex;
        text-align: left;
        align-items: center;
        svg {
          $width: 3em;
          width: $width;
          height: $width;
        }
        .desc {
          margin-left: 1em;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h3 {
            font-size: 1.4em;
            margin-bottom: 0.2em;
          }
        }
      }
    }
  }
}
</style>  
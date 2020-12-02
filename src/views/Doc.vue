<template>
	<div class="doc noSelect">
		<m-header />
		<div class="main">
			<aside v-show="asideVisiable">
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
						<router-link to="/doc/button">Button 按钮</router-link>
					</li>
					<li>
						<router-link to="/doc/switch">Switch 滑动开关</router-link>
					</li>
					<li>
						<router-link to="/doc/modal">Modal 对话框</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">Tabs 标签页</router-link>
					</li>
				</ul>
			</aside>
			<main>
				<div class="aside-button">
					<Button @click.stop="toggleAside" size="small" :no-border="true">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-icon_menu"></use>
						</svg>
					</Button>
				</div>
				<div class="markdown-body">
					<router-view></router-view>
				</div>
			</main>
		</div>
	</div>
</template>

<script lang="ts" setup>
import MHeader from "../components/m-header.vue";
import Button from "../libs/Button.vue";
import { ref } from "vue";
export const asideVisiable = ref(false);
export const toggleAside = () => {
	asideVisiable.value = !asideVisiable.value;
};
export default {
	components: { MHeader, Button },
};
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
		.markdown-body::-webkit-scrollbar {
			display: none;
		}
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
						min-width: 12em;
						padding: 0.5em 1.2em;
					}
				}
			}
		}
		main {
			flex: 1;
			display: flex;
			overflow: auto;
			box-shadow: inset 0px 0px 2px 0px #ccc;
			padding: 0em 2em;
			.aside-button {
				padding-top: 26px;
				margin-left: -20px;
			}
			.markdown-body {
				height: 100%;
				overflow: auto;
			}
		}
	}
}
</style>

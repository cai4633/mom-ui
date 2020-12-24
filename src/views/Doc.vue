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
					<li v-for="navItem in navMap" :key="navItem.title">
						<router-link :to="navItem.path">{{ navItem.title }}</router-link>
					</li>
				</ul>
			</aside>
			<main id="scrollContainer">
				<div class="aside-button" v-if="iconVisiable">
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
import { ref, onMounted } from "vue";
export const asideVisiable = ref(true);
export const iconVisiable = ref(false);
export const navMap = [
	{ title: "Button 按钮", path: "/doc/button" },
	{ title: "Switch 滑动开关", path: "/doc/switch" },
	{ title: "Tabs 标签页", path: "/doc/tabs" },
	{ title: "Icon 图标", path: "/doc/icon" },
	{ title: "Input 输入框", path: "/doc/input" },
	{ title: "Modal 对话框", path: "/doc/modal" },
	{ title: "BackTop 回到顶部", path: "/doc/backtop" },
];
const iconVisiableInit = () => {
	if (document.documentElement.clientWidth < 500) {
		iconVisiable.value = true;
		asideVisiable.value = false;
	} else {
		iconVisiable.value = false;
		asideVisiable.value = true;
	}
};
onMounted(() => {
	iconVisiableInit();
	window.onresize = iconVisiableInit;
});
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
				padding-top: 25px;
				margin-left: -40px;
				svg {
					width: 1.5em;
					height: 1.5em;
				}
			}
			::v-deep .markdown-body {
				height: 100%;
				flex: 1;
				min-width: 100px;
				max-width: 600px;
				.m-api-wrapper {
					//api样式
					margin-top: 3em;
					.vuedoc {
						table {
							tbody {
								tr {
									td {
										&:nth-child(2) {
											color: rgba(0, 0, 0, 0.85);
										}
										&:nth-child(3) {
											color: $td-type-color;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>

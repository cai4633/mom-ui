<template>
	<header class="m-header">
		<a href="/" title="回到主页">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-cai-ui"></use>
			</svg>
			<span class="name">{{ name }}</span>
		</a>
		<ul>
			<li><a :href="github" target="_blank">Github</a></li>
			<li><a :href="gitee" target="_blank">Gitee</a></li>
			<li><a href="#/doc/introduce">文档</a></li>
		</ul>
	</header>
</template>
<script lang="ts">
import { config } from "../../config";
export default {
	setup() {
		const { github, gitee, name } = config;
		return { github, gitee, name };
	},
};
</script>
<style lang="scss">
@import "../common/scss/var.scss";

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid $color-light;
	padding: 10px 20px;
	@media screen and (max-width: 400px) {
		padding: 10px;
	}
	> a {
		display: flex;
		align-items: center;
		.icon {
			$width: 2em;
			width: $width;
			height: $width;
			line-height: 2;
		}
		span.name {
			margin-left: 0.5em;
			font-weight: 600;
			font-size: 1.5em;
			color: $title-color;
			white-space: nowrap;
		}
	}
	ul {
		display: flex;
		color: $color;
		li {
			line-height: 1.2;
			padding: 10px 0;
			min-width: 10px;
			flex: 1;
			margin: 0 10px;
			white-space: nowrap;
			a {
				padding: 5px;
			}
		}
	}
}
</style>

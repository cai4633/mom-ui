<template>
	<div class="c-demo">
		<section class="demo">
			<h3>{{ component._title }}</h3>
			<div class="demo-container">
				<div class="demo-component">
					<component :is="component"></component>
				</div>
				<div class="demo-code-wrapper">
					<div class="demo-action">
						<Button type="primary" size="small" @click="toggle" v-if="!codeVisible"
							>查看源码</Button
						>
						<Button type="primary" size="small" @click="toggle" v-else>隐藏源码</Button>
					</div>
					<transition name="slide">
						<div class="demo-code canSelectText" v-show="codeVisible">
							<pre v-highlight><code v-text="component._source"></code></pre>
						</div>
					</transition>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
import { ref } from "vue";
import TabsDemo from "../components/Tabs.demo.vue";
// TODO 查看隐藏代码

interface Props {
	component: any;
	defaultVisible: boolean;
}

export default {
	components: { Button },
	props: {
		component: { required: true },
		defaultVisible: { type: Boolean, default: false },
	},
	setup(props: Props, context) {
		const codeVisible = ref<boolean>(props.defaultVisible);
		const toggle = () => {
			codeVisible.value = !codeVisible.value;
		};
		return {
			toggle,
			codeVisible,
		};
	},
};
</script>

<style lang="scss">
@import "../common/scss/var.scss";
.c-demo {
	width: 100%;
	section.demo {
		.demo-container {
			width: 100%;
			overflow-x: auto;
			overflow-y: hidden;
			box-shadow: inset 0 0 2px #aaa;
			.demo-component {
				padding: 30px;
				section {
					white-space: nowrap;
				}
			}
			.demo-action {
				padding: 5px 20px;
				button {
					font-size: 0.8em;
				}
			}
			.demo-code-wrapper {
				padding: 10px;
				border-top: 1px solid #ddd;
			}
		}
	}

	& + & {
		margin-top: 60px;
	}
}
</style>

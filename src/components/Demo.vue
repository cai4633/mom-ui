<template>
	<div class="c-demo">
		<section class="demo">
			<h3>{{ component._title }}</h3>
			<div class="demo-container">
				<div class="demo-component">
					<component :is="component"></component>
				</div>
				<div class="demo-code-wrapper">
					<div class="demo-action"><Button type="primary" size="small" @click="toggle">查看代码</Button></div>
					<div class="demo-code" v-if="codeVisible">
						<pre v-highlight><code v-text="component._source"></code></pre>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import TabsDemo from "../components/Tabs.demo.vue";

export default {
	components: { Tabs, Tab, Button },
	props: {
		component: { required: true },
	},
	setup(props) {
		const codeVisible = ref(false);
		const toggle = () => {
			codeVisible.value = !codeVisible.value;
		};
		return { codeVisible, toggle };
	},
};
</script>

<style lang="scss">
.c-demo {
	section.demo {
		.demo-container {
			width: 70%;
			box-shadow: inset 0 0 2px #aaa;
			.demo-component {
				padding: 30px;
			}
			.demo-action {
				padding: 10px 20px;
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

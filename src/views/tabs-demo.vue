<template>
	<div class="c-tabs-demo">
		<section class="demo">
			<h3>基础用法：</h3>
			<div class="demo-container">
				<div class="demo-component">
					<Tabs v-model:selectedIndex="selectedIndex">
						<Tab title="tab1">这是tab1内容</Tab>
						<Tab title="tab2">这是tab2内容</Tab>
						<Tab title="tab3">这是tab3内容</Tab>
					</Tabs>
				</div>
				<div class="demo-code-wrapper">
					<div class="demo-action"><Button type="primary" size="small">查看代码</Button></div>
					<div class="demo-code">
						<pre v-highlight><code v-text="TabsDemo._source"></code></pre>
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
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, TabsDemo };
	},
};
</script>

<style lang="scss">
.c-tabs-demo {
	section.demo {
		.demo-container {
			width: 70%;
			box-shadow: inset 0 0 2px #aaa;
			.demo-component {
				padding: 10px;
			}
			.demo-code-wrapper {
				padding: 10px;
				border-top: 1px solid #ddd;
			}
		}
	}
}
</style>

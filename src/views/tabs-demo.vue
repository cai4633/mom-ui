<template>
	<div class="c-tabs-demo">
		<section>
			<h3>基础用法：</h3>
			<Tabs v-model:selectedIndex="selectedIndex">
				<Tab title="tab1">这是tab1内容</Tab>
				<Tab title="tab2">这是tab2内容</Tab>
				<Tab title="tab3">这是tab3内容</Tab>
			</Tabs>
		</section>
	</div>
</template>

<script lang="ts">
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import { ref } from "vue";

export default {
	components: { Tabs, Tab },
	setup() {
		const selectedIndex = ref(0);
		return { selectedIndex };
	},
};
</script>

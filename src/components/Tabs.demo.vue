<demo> 基础用法 </demo>

<template>
	<Tabs v-model:selectedIndex="selectedIndex">
		<Tab title="tab1">这是tab1内容</Tab>
		<Tab title="tab2">这是tab2内容</Tab>
		<Tab title="tab3">这是tab3内容</Tab>
	</Tabs>
</template>

<script lang="ts">
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import { ref } from "vue";
export default {
	components: { Tabs, Tab },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex };
	},
};
</script>

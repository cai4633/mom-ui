<demo> Tabs 代码 </demo>

<template>
	<Tabs v-model:selectedIndex="selectedIndex">
		<Tab title="tab1">这是tab1内容</Tab>
		<Tab title="tab2">这是tab2内容</Tab>
		<Tab title="tab3">这是tab3内容</Tab>
	</Tabs>
</template>

<script lang="ts">
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";

export default {
	components: { Tabs, Tab },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex };
	},
};
</script>

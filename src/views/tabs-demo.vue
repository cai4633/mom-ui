<template>
	<div class="c-tabs-demo">
		<Demo :component="TabsDemo" />
	</div>
</template>

<script lang="ts">
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import TabsDemo from "../components/Tabs.demo.vue";
import Demo from "../components/Demo.vue";
export default {
	components: { Demo, Tabs, Tab, Button },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, TabsDemo };
	},
};
</script>

<template>
	<div class="c-tabs-demo">
		<Demo :component="TabsDemo" />
		<div class="m-api-wrapper">
			<Api />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import TabsDemo from "../components/Tabs.demo.vue";
import Demo from "../components/Demo.vue";
import Api from "../markdown/tabs-api.md";
export default {
	components: { Demo, Api },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, TabsDemo };
	},
};
</script>

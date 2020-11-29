<template>
	<div class="c-tabs-demo">
		<Demo :component="TabsDemo" />
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import TabsDemo from "../components/Tabs.demo.vue";
import Demo from "../components/Demo.vue";
export default {
	components: { Demo },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, TabsDemo };
	},
};
</script>

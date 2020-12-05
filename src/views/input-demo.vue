<template>
	<div class="m-input-demo">
		<Demo :component="Input1" />
		<Demo :component="Input2" />
		<Demo :component="Input3" />
		<div class="m-api-wrapper">
			<Api />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import Input1 from "../components/Input1.demo.vue";
import Input2 from "../components/Input2.demo.vue";
import Input3 from "../components/Input3.demo.vue";
import Demo from "../components/Demo.vue";
import Api from "../markdown/input-api.md";
export default {
	components: { Demo, Api },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, Input1, Input2, Input3 };
	},
};
</script>

<template>
	<div class="m-input-demo">
		<Demo :component="BackTop1" :defaultVisible="true" />
		<div class="m-api-wrapper">
			<Api />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import BackTop1 from "../components/BackTop1.demo.vue";
import Demo from "../components/Demo.vue";
import Api from "../markdown/backtop-api.md";
export default {
	components: { Demo, Api },
	setup(props) {
		const selectedIndex = ref(0);
		return { selectedIndex, BackTop1 };
	},
};
</script>

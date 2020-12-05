<template>
	<div class="m-input-demo">
		<Demo :component="Icon" />
		<div class="m-api-wrapper">
			<Api />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import Icon from "../components/Icon.demo.vue";
import Demo from "../components/Demo.vue";
import Api from "../markdown/icon-api.md";
export default {
	components: { Demo, Api },
	setup(props) {
		return { Icon };
	},
};
</script>

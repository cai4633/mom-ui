<template>
	<div class="c-tab">
		<slot></slot>
	</div>
</template>
<script lang="ts">
export default {
	props: {
		title: { type: String, default: "tab" },
	},
};
</script>

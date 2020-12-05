<template>
	<div class="m-icon">
		<svg class="icon" aria-hidden="true">
			<use :xlink:href="name"></use>
		</svg>
	</div>
</template>
<script lang="ts">
export default {
	props: {
		name: { type: String, default: "" },
	},
};
</script>

<style lang="scss">
.m-icon {
	display: inline-block;
	& + & {
		margin-left: 1em;
	}
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
}
</style>

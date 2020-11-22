<template>
	<div class="m-switch" :class="{ checked }" @click="toggleBtn">
		<div class="inner"></div>
	</div>
</template>

<script lang="ts">
import { SetupContext, ObjectEmitsOptions } from "vue";

interface Prop {
	checked: {
		type: BooleanConstructor;
		default: boolean;
	};
}

export default {
	props: {
		checked: { type: Boolean, default: false },
	},
	setup(props: Prop, context: SetupContext<any>) {
		const toggleBtn = () => {
			context.emit("update:checked", !props.checked);
		};

		return { toggleBtn };
	},
};
</script>

<style lang="scss">
.m-switch {
	$width: 20px;
	$duration: 0.3s;
	width: 2 * $width;
	padding: 1px;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0 0 2px #333;
	margin: 2px;
	transition: all $duration;

	.inner {
		width: $width;
		height: $width;
		border-radius: 20px;
		background-color: #fff;
		box-shadow: 1px 1px 2px 0 #333;
		transform: translateX(0);
		transition: all $duration;
	}
	&.checked {
		background-color: #4dd865;
		.inner {
			transform: translateX($width - 2px);
			box-shadow: 0px 0px 2px #333;
		}
	}
}
</style>

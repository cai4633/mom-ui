<template>
	<button class="c-button" :class="{ disabled, loading, [size]: size, [type]: type }">
		<svg class="icon" aria-hidden="true" v-if="loading">
			<use xlink:href="#icon-loading"></use>
		</svg>
		<slot>Button</slot>
	</button>
</template>

<script lang="ts">
import { SetupContext } from "vue";

interface Props {
	type: "default" | "primary" | "warning" | "ghost";
	size: "normal" | "big" | "small";
	disabled: boolean;
	loading: boolean;
}
export default {
	props: {
		type: { type: String, default: "default" },
		size: { type: String, default: "normal" },
		disabled: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
	},
	setup(props: Props, context: SetupContext) {},
};
</script>

<style lang="scss">
.c-button {
	border: 1px solid #000;
	$w: 90px;
	$h: 50px;
	$bc-primary: #108ee9;
	$bc-ghost: #fff;
	$bc-default: #fff;
	$bc-warning: #e94f4f;
	$color-primary: #fff;
	$color-ghost: $bc-primary;
	$color-warning: #fff;
	$color-default: #444;
	font-size: 14px;
	border-radius: 5px;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	padding: 0 10px;
	border: none;
	display: inline-block;
	vertical-align: middle;

	&:focus {
		border: none;
		outline: none;
	}

	&:hover {
		opacity: 0.8;
		box-shadow: 0 0 2px #bbb;
	}

	&.normal {
		width: $w;
		height: 0.8 * $h;
		line-height: 0.8 * $h;
	}
	&.disabled {
		cursor: not-allowed;
	}

	&.loading {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		@keyframes myPin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		svg.icon {
			display: inline-block;
			vertical-align: top;
			flex: 0 0 1em;
			width: 1em;
			height: 1em;
			margin-right: 5px;
			border-radius: 50%;
			animation: myPin 1.5s linear infinite;
		}
	}
	&.big {
		width: 1.8 * $w;
		height: $h;
		line-height: $h;
	}
	&.small {
		width: 0.8 * $w;
		height: 0.6 * $h;
		line-height: 0.6 * $h;
	}
	&.default {
		background-color: $bc-default;
		color: $color-default;
		margin: 1px;
		border: 1px solid #ddd;
	}
	&.primary {
		background-color: $bc-primary;
		color: $color-primary;
		border: 1px solid $bc-primary;
	}
	&.ghost {
		background-color: $bc-ghost;
		color: $color-ghost;
		border: 1px solid $color-ghost;
	}
	&.warning {
		background-color: $bc-warning;
		color: $color-warning;
		border: 1px solid $bc-warning;
	}

	& + & {
		margin-left: 1em;
	}
}
</style>

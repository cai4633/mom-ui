<template>
	<div class="m-input" :class="{ 'm-input-focused': focused, [`m-input-${size}`]: size, 'm-input-disabled': disabled }">
		<component :is="prefix" class="m-input-prefix"></component>
		<input v-bind="$attrs" @change="onchange" @input="oninput" @focus="showShadow" @blur="hideShadow" :disabled="disabled" />
		<component :is="suffix" class="m-input-suffix"></component>
	</div>
</template>

<script lang="ts">
import { SetupContext, onMounted } from "vue";
import { ref } from "vue";
export default {
	inheritAttrs: false,
	props: {
		onchange: { type: Function, default: () => {} },
		size: { type: String, default: "middle" },
		disabled: { type: Boolean, default: false },
	},
	setup(props, context: SetupContext<any>) {
		let slots = [];
		const focused = ref(false);
		if (context.slots.default) {
			slots = context.slots.default();
		}
		const [prefix, suffix] = slots;
		const oninput = (e: KeyboardEvent) => {
			context.emit("update:value", (e.target as HTMLInputElement).value);
		};
		const showShadow = () => {
			focused.value = true;
		};
		const hideShadow = () => {
			focused.value = false;
		};
		return { oninput, prefix, suffix, focused, showShadow, hideShadow };
	},
};
</script>

<style lang="scss">
@import "../common/scss/var.scss";
.m-input {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	position: relative;
	display: inline-flex;
	width: 100%;
	border: 1px solid $line-light-color;
	align-items: center;
	&-disabled {
		* {
			cursor: not-allowed;
		}
	}

	& > &-prefix {
		display: inline-block;
		padding-left: 8px;
		& + input {
			padding-left: 8px;
		}
	}

	& > &-suffix {
		display: inline-block;
		padding-right: 8px;
	}
	&-focused {
		border-color: $highlight;
		-webkit-box-shadow: 0 0 3px $highlight;
		box-shadow: 0 0 3px $highlight;
	}
	&:hover {
		border-color: $highlight;
	}
	input {
		padding: 5px 10px;
		margin: 0;
		display: inline-block;
		min-width: 50%;
		flex: 1;
		color: rgba(0, 0, 0, 0.85);
		font-size: 14px;
		line-height: 1.5;
		background-color: #fff;
		border-radius: 2px;
		outline: none;
		border: none;
		&::-moz-placeholder {
			opacity: 1;
		}

		&::-webkit-input-placeholder {
			color: $dark-color;
		}

		&:-ms-input-placeholder {
			color: $dark-color;
		}

		&::-ms-input-placeholder {
			color: $dark-color;
		}

		&::placeholder {
			color: $dark-color;
		}
	}
	& + & {
		margin-top: 1em;
	}
	&-big {
		font-size: 16px;
		input {
			height: 44px;
			font-size: inherit;
		}
	}
	&-middle {
		font-size: 14px;
		input {
			height: 32px;
			font-size: inherit;
		}
	}
	&-small {
		font-size: 12px;
		input {
			height: 24px;
			font-size: inherit;
		}
	}
}
</style>

<template>
	<teleport to="body">
		<div class="c-modal" v-if="visiable">
			<div class="c-mask" @click.stop="hideModal"></div>
			<main>
				<h3>{{ title }}</h3>
				<p>{{ message }}</p>
				<section class="action">
					<Button size="small" @click.stop="cancel">取消</Button>
					<Button size="small" @click.stop="ok" type="primary">确认</Button>
				</section>
			</main>
		</div>
	</teleport>
</template>
<script lang="ts">
import Button from "./Button.vue";
import { SetupContext, Teleport } from "vue";
import { Props } from "./showModal";

export default {
	props: {
		visiable: { type: Boolean, default: false },
		title: { type: String, default: "标题" },
		message: { type: String, default: "提示的内容" },
		onok: Function,
		oncancel: Function,
	},
	components: { Button, Teleport },
	setup(props: Props, context: SetupContext<any>) {
		const hideModal = () => {
			context.emit("update:visiable", false);
		};
		const cancel = () => {
			if (props.oncancel() !== false) {
				hideModal();
			}
		};
		const ok = () => {
			if (props.onok() !== false) {
				hideModal();
			}
		};
		return { hideModal, cancel, ok };
	},
};
</script>

<style lang="scss">
.c-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	main {
		background-color: #fff;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 3px;
		padding: 20px 30px;
		h3 {
			font-weight: 500;
			font-size: 1.1em;
			margin: 0;
		}
		p {
			padding: 20px 0px;
			min-width: 20em;
			max-height: 4em;
			font-size: 0.9em;
			color: #333;
		}
		section.action {
			text-align: right;
		}
	}
	.c-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}
}
</style>

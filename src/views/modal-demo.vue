<template>
	<div class="c-modal-demo">
		<section>
			<h3>基础用法：</h3>
			<p>通过点击打开对话框</p>
			<Button type="primary" @click="showOneModal">打开对话框</Button>
			<Modal v-model:visiable="modalVisiable" :onok="() => {}" :oncancel="() => {}" title="提示" message="这是一个 Modal 组件！"></Modal>
		</section>
		<section>
			<h3>函数式调用：</h3>
			<p>通过函数式 api 打开对话框</p>
			<Button type="primary" @click="showAnotherModal">函数式对话框</Button>
		</section>
	</div>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../components/Button.vue";
import Modal from "../components/Modal.vue";
import showModal from "../components/showModal";

interface Props {}
export default {
	components: {
		Modal,
		Button,
	},
	setup(props: Props) {
		const modalVisiable = ref(false);
		const showOneModal = (e) => {
			modalVisiable.value = true;
		};
		const showAnotherModal = () => {
			showModal({
				title: "提示",
				message: "函数式调用对话框",
				onok: () => {
					console.log("ok");
				},
				oncancel: () => {
					console.log("cancel");
				},
			});
		};
		return { showOneModal, modalVisiable, showAnotherModal };
	},
};
</script>

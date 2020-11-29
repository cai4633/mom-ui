<demo>基础用法</demo>

<template>
	<section>
		<p>点击按钮打开对话框</p>
		<Button type="primary" @click="showOneModal">打开对话框</Button>
		<Modal v-model:visiable="modalVisiable" :onok="() => {}" :oncancel="() => {}" title="提示" message="这是一个 Modal 组件！"></Modal>
	</section>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../components/Button.vue";
import Modal from "../components/Modal.vue";

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
		return { showOneModal, modalVisiable };
	},
};
</script>

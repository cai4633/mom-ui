<template>
	<div class="button-demo">
		<section>
			<h3>基础用法：</h3>
			<Button type="primary" @click="showModal">打开对话框</Button>
			<Modal v-model:visiable="modalVisiable" :onok="() => {}" :oncancel="() => {}" title="提示" message="这是一个 Modal 组件！"></Modal>
		</section>
	</div>
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
		const showModal = (e) => {
			modalVisiable.value = true;
		};
		return { showModal, modalVisiable };
	},
};
</script>

<demo>函数式调用</demo>

<template>
	<section>
		<p>通过函数式 api 打开对话框</p>
		<Button type="primary" @click="showAnotherModal">函数式对话框</Button>
	</section>
</template>
<script lang="ts">
import { ref } from "vue";
import showModal from "../components/showModal";
import Button from "../components/Button.vue";
export default {
	components: {
		Button,
	},
	setup(props) {
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
		return { showAnotherModal };
	},
};
</script>

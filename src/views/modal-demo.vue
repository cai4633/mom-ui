<template>
	<div class="c-modal-demo">
		<Demo :component="Modal1" />
		<Demo :component="Modal2" />
		<div class="m-api-wrapper"><Api /></div>
	</div>
</template>
<script lang="ts">
import { ref } from "vue";
import Demo from "../components/Demo.vue";
import Modal1 from "../components/Modal1.demo.vue";
import Modal2 from "../components/Modal2.demo.vue";
import { Props } from "../libs/showModal";
import Api from "../markdown/modal-api.md";
export default {
	components: {
		Demo,
		Api,
	},
	setup(props: Props) {
		return { Modal1, Modal2 };
	},
};
</script>

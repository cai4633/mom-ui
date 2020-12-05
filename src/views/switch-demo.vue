<template>
	<div class="m-switch-demo">
		<Demo :component="Switch1" />
		<div class="m-api-wrapper"><Api /></div>
	</div>
</template>

<script>
import Switch1 from "../components/Switch.demo.vue";
import Demo from "../components/Demo.vue";
import { ref, onUpdated } from "vue";
import Api from "../markdown/switch-api.md";
export default {
	components: {
		Demo,
		Api,
	},
	setup(props) {
		const check = ref(false);
		return { check, Switch1 };
	},
};
</script>

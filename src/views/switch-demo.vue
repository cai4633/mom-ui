<template>
	<div class="switch-demo">
		<Demo :component="Switch1" />
	</div>
</template>

<script>
import Switch1 from "../components/Switch.demo.vue";
import Demo from "../components/Demo.vue";
import { ref, onUpdated } from "vue";
export default {
	components: {
		Demo,
	},
	setup(props) {
		const check = ref(false);
		return { check, Switch1 };
	},
};
</script>

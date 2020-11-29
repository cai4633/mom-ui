<demo>基础用法</demo>
<template>
	<Switch v-model:checked="check"></Switch>
</template>

<script>
import Switch from "../components/Switch.vue";
import { ref, onUpdated } from "vue";
export default {
	components: { Switch },
	setup(props) {
		const check = ref(false);
		return { check };
	},
};
</script>

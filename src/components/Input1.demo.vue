<demo>基本用法</demo>

<template>
	<Input type="text" placeholder="base usage" v-model:value="content" />
</template>
<script lang="ts">
import Input from "../libs/Input.vue";
import { ref, watch } from "vue";
export default {
	components: { Input },
	setup(props) {
		const content = ref("");
		return { content };
	},
};
</script>

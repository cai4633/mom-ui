<demo>输入框禁用：disabled</demo>

<template>
	<Input type="text" placeholder="disabled" v-model:value="content1" disabled><Icon name="#icon-search" /></Input>
</template>
<script lang="ts">
import Input from "../libs/Input.vue";
import Icon from "../libs/Icon.vue";
import { ref, watch } from "vue";

export default {
	components: { Input, Icon },
	setup(props) {
		const content1 = ref("");
		return { content1 };
	},
};
</script>

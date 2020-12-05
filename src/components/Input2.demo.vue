<demo>输入框大小：size </demo>

<template>
	<Input type="text" placeholder="size: big" v-model:value="content1" size="big"><Icon name="#icon-search" /></Input>
	<Input type="text" placeholder="size: middle" v-model:value="content2" size="middle"><Icon name="#icon-search" /></Input>
	<Input type="text" placeholder="size: small" v-model:value="content3" size="small" disabled><Icon name="#icon-search" /></Input>
</template>
<script lang="ts">
import Input from "../libs/Input.vue";
import Icon from "../libs/Icon.vue";
import { ref, watch } from "vue";
import "//at.alicdn.com/t/font_1801507_4k3uimqugui.js";

export default {
	components: { Input, Icon },
	setup(props) {
		const content1 = ref("");
		const content2 = ref("");
		const content3 = ref("");
		return { content1, content2, content3 };
	},
};
</script>

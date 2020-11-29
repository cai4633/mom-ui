<demo> 按钮风格 type</demo>

<template>
	<section>
		<Button type="primary">primary</Button>
		<Button type="ghost">ghost</Button>
		<Button type="warning">warning </Button>
	</section>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
export default {
	components: { Button },
};
</script>

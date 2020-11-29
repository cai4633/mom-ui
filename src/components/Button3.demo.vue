<demo> 按钮大小 size </demo>

<template>
	<section>
		<Button type="primary" size="big">big</Button>
		<Button type="primary" size="normal"> normal </Button>
		<Button type="primary" size="small"> small </Button>
	</section>
</template>
<script lang="ts">
import Button from "../components/Button.vue";
export default {
	components: { Button },
};
</script>

<demo>disabled 和 loading</demo>

<template>
	<section>
		<Button type="primary" disabled>disabled</Button>
		<Button type="ghost" loading> loading </Button>
	</section>
</template>
<script lang="ts">
import Button from "../components/Button.vue";
export default {
	components: { Button },
};
</script>

<demo> 基础用法： </demo>

<template>
	<section>
		<Button @click="onclick">default</Button>
	</section>
</template>
<script lang="ts">
import Button from "../components/Button.vue";

export default {
	components: {
		Button,
	},
	setup(props) {
		const onclick = (e) => {
			console.log("click");
		};
		return { onclick };
	},
};
</script>

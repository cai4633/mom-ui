<template>
	<div class="button-demo">
		<Demo :component="Button1" />
		<Demo :component="Button2" />
		<Demo :component="Button3" />
		<Demo :component="Button4" />
	</div>
</template>
<script lang="ts">
import Button from "../components/Button.vue";
import Button1 from "../components/Button1.demo.vue";
import Button2 from "../components/Button2.demo.vue";
import Button3 from "../components/Button3.demo.vue";
import Button4 from "../components/Button4.demo.vue";
import Demo from "../components/Demo.vue";

export default {
	components: {
		Button,
		Demo,
	},
	setup(props) {
		const onclick = (e) => {
			console.log("click");
		};
		return { onclick, Button1, Button2, Button3, Button4 };
	},
};
</script>

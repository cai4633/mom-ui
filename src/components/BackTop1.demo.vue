<demo> 基础用法： </demo>

<template>
	<section>
		滚动页面出现 BackTop
		<BackTop :target="target" />
	</section>
</template>
<script lang="ts">
import BackTop from "../libs/BackTop.vue";
import { ref, onMounted } from "vue";
export default {
	components: {
		BackTop,
	},
	setup(props) {
		const target = () => document.getElementById("scrollContainer");

		const onclick = (e) => {
			console.log("click it!");
		};
		onMounted(() => {});
		return { onclick, target };
	},
};
</script>

<template>
	<div class="button-demo">
		<section>
			<h3>基础用法：</h3>
			<Button @click='onclick'>default</Button>
		</section>
			<h3>按钮风格 type：</h3>
			<Button type="primary">primary</Button>
			<Button type="ghost">ghost</Button>
			<Button type="warning">warning </Button>
		</section>
		<section>
			<h3>按钮大小 size</h3>
			<Button type="primary" size="big">big</Button>
			<Button type="primary" size="normal"> normal </Button>
			<Button type="primary" size="small"> small </Button>
		</section>
		<section>
			<h3>disabled 和 loading</h3>
			<Button type="primary" disabled>disabled</Button>
			<Button type="ghost" loading> loading </Button>
		</section>
	</div>
</template>
<script lang='ts'>
import Button from "../components/Button.vue";
export default {
	components: {
		Button,
	},
  setup(props) {
    const onclick = (e)=>{
      console.log("click")
    }
    return {onclick}
  }
};
</script>

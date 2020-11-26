<template>
	<div class="c-tabs">
		<ul class="c-tabs-tag">
			<li v-for="(c, index) in slots" :key="index" @click.stop="selected(index)" :class="{ selected: index === selectedIndex }">{{ c.props.title }}</li>
		</ul>
		<section class="container">
			<component :is="slots[selectedIndex]" :key="selectedIndex"></component>
		</section>
	</div>
</template>

<script lang="ts">
import { SetupContext } from "vue";
export default {
	props: {
		selectedIndex: { type: Number, default: 0 },
	},
	setup(props, context: SetupContext<any>) {
		const slots = context.slots.default();
		const selected = (index: number) => {
			context.emit("update:selectedIndex", index);
		};
		return { slots, selected };
	},
};
</script>

<style lang="scss">
@import "../common/scss/var.scss";
.c-tabs {
	$padding: 4px;
	ul.c-tabs-tag {
		display: flex;
		align-items: center;
		vertical-align: top;
		border-bottom: 1px solid #ccc;
		margin: auto;
		padding: 0;
		li {
			margin-top: 0;
			display: block;
			padding: $padding;
			& + li {
				margin-left: 20px;
			}
			&.selected {
				color: $highlight;
			}
		}
	}
	.container {
		padding: 10px $padding;
		min-height: 50px;
	}
}
</style>

<template>
	<div class="c-tabs">
		<ul class="c-tabs-tag" ref="tabs">
			<li
				v-for="(c, index) in slots"
				:key="index"
				@click.stop="selected(index)"
				:class="{ selected: index === selectedIndex }"
				:ref="
					(el) => {
						if (el) lis[index] = el;
					}
				"
			>
				{{ c.props.title }}
			</li>
			<li class="c-tabs-tag-indicator" ref="indicator"></li>
		</ul>
		<section class="container">
			<component :is="slots[selectedIndex]" :key="selectedIndex"></component>
		</section>
	</div>
</template>

<script lang="ts">
import { SetupContext, ref, Ref, onMounted, reactive, onUpdated } from "vue";
export default {
	props: {
		selectedIndex: { type: Number, default: 0 },
	},
	setup(props, context: SetupContext<any>) {
		const slots = context.slots.default();
		const lis = reactive<HTMLElement[]>([]);
		const tabs = ref<HTMLElement>();
		const indicator = ref<HTMLElement>();
		const selected = (index: number) => {
			context.emit("update:selectedIndex", index);
		};
		const setIndicatorStatus = () => {
			const { width, left: left1 } = lis[props.selectedIndex].getBoundingClientRect();
			const { left: left2 } = tabs.value.getBoundingClientRect();
			indicator.value.style.width = `${width}px`;
			indicator.value.style.left = `${left1 - left2}px`;
		};
		onUpdated(() => {
			setIndicatorStatus();
		});
		onMounted(() => {
			setIndicatorStatus();
		});
		return { slots, selected, lis, tabs, indicator };
	},
};
</script>

<style lang="scss">
@import "../common/scss/var.scss";
.c-tabs {
	$padding: 4px;
	ul.c-tabs-tag {
		position: relative;
		vertical-align: top;
		border-bottom: 1px solid #ccc;
		margin: auto;
		padding: 0;
		li {
			margin-top: 0;
			display: inline-block;
			padding: $padding;
			& + li {
				margin-left: 20px;
			}
			&.selected {
				color: $highlight;
			}
			&.c-tabs-tag-indicator {
				position: absolute;
				bottom: -1px;
				left: 0;
				height: 2px;
				border: none;
				margin: 0;
				padding: 0;
				width: 30px;
				background: $highlight;
				transition: left 250ms;
			}
		}
	}
	.container {
		padding: 10px $padding;
		min-height: 50px;
	}
}
</style>

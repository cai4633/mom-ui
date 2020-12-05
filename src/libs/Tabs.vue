<template>
	<div class="m-tabs">
		<ul class="m-tabs-tag" ref="tabs">
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
			<li class="m-tabs-tag-indicator" ref="indicator"></li>
		</ul>
		<section class="container">
			<component :is="slots[selectedIndex]" :key="selectedIndex"></component>
		</section>
	</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { SetupContext, ref, Ref, onMounted, reactive, onUpdated, watchEffect } from "vue";
export default {
	props: {
		selectedIndex: { type: Number, default: 0 },
	},
	setup(props, context: SetupContext<any>) {
		const slots = context.slots.default();
		// 检查用户传递给Tabs组件的slot类型
		slots.forEach((slot) => {
			if (slot.type !== Tab) {
				throw Error("Tabs组件中只能包含Tab组件！");
			}
		});
		const lis = reactive<HTMLElement[]>([]);
		const tabs = ref<HTMLElement>();
		const indicator = ref<HTMLElement>();
		const selected = (index: number) => {
			context.emit("update:selectedIndex", index);
		};
		onMounted(() => {
			watchEffect(() => {
				const { width, left: left1 } = lis[props.selectedIndex].getBoundingClientRect();
				const { left: left2 } = tabs.value.getBoundingClientRect();
				indicator.value.style.width = `${width}px`;
				indicator.value.style.left = `${left1 - left2}px`;
			});
		});
		return { slots, selected, lis, tabs, indicator };
	},
};
</script>

<style lang="scss">
@import "../common/scss/var.scss";
.m-tabs {
	$padding: 4px;
	ul.m-tabs-tag {
		position: relative;
		vertical-align: top;
		border-bottom: 1px solid #ddd;
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
			&.m-tabs-tag-indicator {
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

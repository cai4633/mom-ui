<template>
  <div class="m-button">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props {
  type: "primary" | "simple";
}
export default {
  props: {
    type: { type: String, default: "primary" },
  },
  setup() {},
};
</script>

<style lang="scss">
.m-button {
  border: 1px solid #000;
}
</style>

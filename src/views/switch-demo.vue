<template>
  <div class="switch-demo">
    <Switch v-model:checked="check"></Switch>
  </div>
</template>

<script>
import Switch from "../components/Switch.vue";
import { ref, onUpdated } from "vue";
export default {
  components: {
    Switch,
  },
  setup(props) {
    const check = ref(false);
    return { check };
  },
};
</script>

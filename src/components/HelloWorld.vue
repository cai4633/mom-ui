<template>
  <h1>{{ msg }}</h1>
  <cai></cai>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import Cai from './Cai.vue'
export default {
  name: 'HelloWorld',
  components: {
    Cai: Cai
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>페이지2</h1>
    <button type="button" color2="#ffa" @click="color=true, $emit('send', color2)" :disabled="color"> 노란색 </button>
    <button type="button" color2="#bfb" @click="color=false, $emit('send', color2)" :disabled="!color"> 녹색 </button>
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  data: function() {
    return { 
      color: false };
  },
  components: { Child }
}
</script>


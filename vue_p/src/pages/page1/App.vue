<template>
  <div id="app">
    <h1>페이지1</h1>
    <input type="text" v-model="text" />
    <Child :text="text"/>
    <Child :text="text"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  data: function() {
      return {text: ''};
  },
  components: { Child }
}
</script>
<style scoped>
  #app {
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
  }

  h1 {
    margin: 0px;
  }

  input {
    margin: 10px 0px 0px 0px;
  }
</style>

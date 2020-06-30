<template>
  <div id="app">
    <h1>페이지2</h1>
    <h3>App: {{text}} </h3>
    <Child @click = "setText"/>
    
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  methods: {
    setText(value) {
      this.text = value;
    }
  },
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
</style>


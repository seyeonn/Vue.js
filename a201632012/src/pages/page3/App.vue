<template>
  <div id="app" v-bind:class="color ? 'yellow' : 'green'">
    <h1>페이지3</h1>
    <Child @send = "setColor"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'App',
  methods: {
    setColor(value) {
      this.color = value;
    }
  },
  data: function() {
      return {
        number: 0,
        color: false
        };
  },
  components: { Child }
}
</script>


<style scoped>
    div#container {
        border: 1px solid black;
        margin: 20px;
        padding: 10px;
    }

    .yellow {
      background-color: #bfb;
    }
    
    .green {
      background-color: #ffa;
    }
    #app {
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
  }

  h1 {
    margin: 0px;
  }
</style>

<template>
  <div id="app">
    <h1>페이지3</h1>
    <div id="container" v-bind:class="value ? 'yellow' : 'green'">
    <span> {{number}} </span>
    </div>
    <br />
    <button type="button" @click="number++, value=true" :disabled="value"> 노란색 </button>
    <button type="button" @click="number++, value=false" :disabled="!value"> 연두색 </button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
      return {
        number: 0,
        value: true 
        };
  }
}
</script>


<style scoped>
    div#container {
        border: 1px solid black;
        margin: 20px;
        padding: 10px;
    }

    .yellow {
      background-color: #ffa;
    }
    
    .green {
      background-color: #bfb;
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

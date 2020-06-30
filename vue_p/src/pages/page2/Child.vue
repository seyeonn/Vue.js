<template>
  <div id="app">
    <span>Child: </span>
    <input type="text" v-model="text" />
     <button type="button" @click="$emit('click',text)"> ok </button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data: function() {
      return {text: ''};
  }
}
</script>

<style scoped>
    div#app {
        border: 1px solid black;
        margin: 20px;
        padding: 10px;
        background-color: #ffa;
    }
</style>


<template>
  <div v-on:send="showValue" v-bind:style="{ backgroundColor: color2 }">
    <h2>Child</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  data: function() {
    return { color: true };
  },
  props: {
  color2: String
  },
  methods: {
    showValue(value) {
      this.color = value;
    }
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
  .yellow {
      background-color: #ffa;
    }
    
    .green {
      background-color: #bfb;
    }
</style>



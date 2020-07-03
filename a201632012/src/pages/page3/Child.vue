<template>
  <div>
    <span>Child: </span>
    <button type="button" @click="$emit('send', value), value=true" :disabled="value"> 노란색 </button>
    <button type="button"  @click="$emit('send', value), value=false" :disabled="!value"> 연두색 </button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data: function() {
    return { value: true };
  }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>


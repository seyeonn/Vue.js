<template>
  <div>
    <h3>Child: 
    <span>{{text}}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: { text: String }
}
</script>

<style scoped>
    div {
        border: 1px solid black;
        margin: 20px;
        padding: 20px;
        background-color: #ffa;
        font-weight: bolder;
    }

</style>
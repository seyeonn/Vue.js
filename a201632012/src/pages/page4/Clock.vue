<template>
  <td v-on:click="onClick(value)">{{ time }}</td>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  data: function() {
    return { time: null };
  },
  mounted: function() {
    let callback = () => this.time = moment().format("HH:mm:ss")
    callback();
  },
  methods: {
        onClick: function(value) {
                this.change[value] = true;
                let a = this.matrix.slice(0);
                this.matrix = a;
                this.count++;
        }
     }
}
</script>

<style scoped>
 td {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    font-size: 20pt;
    text-align: center;
    cursor: pointer;
  }
   .yellow { background-color: #ffa; }
</style>
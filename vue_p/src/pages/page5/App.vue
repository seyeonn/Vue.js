<template>
  <div id="app">
    <h1>페이지5</h1>
    <table>
      <tr v-for="(row, index1) in matrix" v-bind:key="index1">
        <td v-for="(value, index2) in row" v-bind:key="index2"
        v-on:click="onClick(value)" v-bind:class="change[value] ? 'yellow' : ''" >
          {{ value }}
        </td>
      </tr>
    </table>
    <h3>클릭수: {{count}} </h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
        size: 4,
        matrix: [],
        change: [],
        count: 0
    }
      },
  created() {
        for (let r = 0; r < this.size; ++r) {
          this.matrix[r] = [];
          for (let c = 0; c < this.size; ++c) 
            this.matrix[r][c] = r * this.size + c + 6;
        }
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
    #app {
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
  }

  h1 {
    margin: 0px;
  }

  table {
    border-collapse: collapse;
    margin: 40px auto;
    background-color: #bfb;
  }

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

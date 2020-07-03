<template>
  <div id="app">
    <h1>페이지4</h1>
    <div>
      <table>
        <tr v-for="(time, index) in times" :key="index">
          <Clock />
        </tr>
      </table>
      <br/>
      <button type="button" @click="addTime(time)">현재시각 추가</button>
      <h3>클릭 수: {{count}}</h3>
    </div>
  </div>
</template>

<script>
import Clock from './Clock.vue'

export default {
  name: "App",
  components: { Clock },
  data: function() {
    return {
      time: '',
      size: 0,
      times: [],
      count: 0
    }
  },
  created: function() {
    this.size = this.times.length;
  },
  methods: {
    addTime(time) {
      this.times.push(time);
      let a = this.times.slice(0);
      this.times = a;
    }   
  }
}
</script>

<style scoped>
   
  table {
    border-collapse: collapse;
  }

</style>


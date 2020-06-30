<template>
  <div id="app">
    <h1>페이지4</h1>
    <table>
      <tr v-for="(user,index) in users" v-bind:key="index">
        <td>{{ user.name }} </td>
        <td>{{ user.age }}</td>
      </tr>
    </table>
    <span>이름: </span>
    <input type="text" v-model="name" />
    <br />
    <span>나이: </span>
    <input type="text" v-model.number="age" /><br/>
    <button type="button" @click="save(name,age)"> 저장 </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
      return {
        name: '',
        age: 0,
        size: 0,
        users: [
        {'name': '홍길동', 'age': 16},
        {'name': '임꺽정', 'age': 17}
        ]
        };
  },
  created: function() {
    this.size = this.users.length;
  },
  methods: {
    save(name,age) {
      let user = {};
      user.name = name;
      user.age = age;
      this.users.push(user);
      let a = this.users.splice(0);
      this.users = a;
      this.name = '';
      this.age='';
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
    width: 100px;
    margin: 20px 0px;
  }

  td {
    padding: 5px;
    border: 1px solid black;
    text-align: center;
  }

  input {
    margin: 5px 0px;
  }
</style>

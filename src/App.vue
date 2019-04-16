<template>
  <div id="app">
    <img class="mobile" src="./assets/logo1.png">
    <p>{{ msg }}</p>
    <PTS/>
  </div>
</template>

<script>
import PTS from '../components/PTS.vue';


export default {
  name: 'app',
  data: function () {
    return {
      msg: 'printable, weekly schedule the easy way'
    };
  },
  components: {
    PTS
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  width: 600px;
}

.mobile {
  margin: auto;
  width: 600px;
  float: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

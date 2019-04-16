import Vue from 'vue';
import store from './store.js';
import App from './App.vue';

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
});

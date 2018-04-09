import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Use vue-resource package
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
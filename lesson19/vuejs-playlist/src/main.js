import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'

// ninjas 컴포넌트를 전역 컴포넌트로 사용할 경우
// Vue.component('ninjas', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
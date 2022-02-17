import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "https://safe-hamlet-90202.herokuapp.com/" : "https://github.com/acnikzad/cars_fe/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

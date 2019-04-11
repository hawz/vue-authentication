import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router';
import store from './store';

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-stock-trader-a62b6.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'fsdasdasd';
axios.defaults.headers.get['Accept'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config);
  // config.headers['SOMETHING'] = 'CIAO!';
  return config;
});

const resInterceptor = axios.interceptors.response.use(response => {
  console.log('Response interceptor',response);
  return response;
});

// Here we can "destroy" the interceptors that we've just created
// (so they won't actually never be used) with the eject() method
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

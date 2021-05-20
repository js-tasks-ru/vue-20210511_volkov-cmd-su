import Vue from './vendor/vue.esm.browser.js';

// Требуется создать Vue приложение
let app = new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counter() {
      this.count++;
    },
  },
});

app.$mount('#app');

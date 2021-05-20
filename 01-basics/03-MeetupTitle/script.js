import Vue from './vendor/vue.esm.browser.js';

// Требуется создать Vue приложение
let app = new Vue({
  data() {
    return {
      radioButtons: [1, 2, 3, 4, 5],
      picked: 1,
      titleMeetup: '',
    };
  },
  mounted() {
    this.api();
  },
  watch: {
    picked() {
      this.api();
    },
  },
  methods: {
    api() {
      let promise = fetch('https://course-vue.javascript.ru/api/meetups/' + this.picked);
      promise.then(response => {
        return response.text();
      }).then(data => {
        data = JSON.parse(data);
        this.titleMeetup = data.title;
      });
    },
  },
});

app.$mount('#app');

import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

// Требуется создать Vue приложение
new Vue({
  el: '#app',
  data() {
    return {
      API_URL,
      MEETUP_ID,
      agendaItemIcons,
      agendaItemDefaultTitles,
      meetups: null,
    }
  },
  mounted() {
    this.getMeetup();
  },
  methods: {
    getMeetup() {
      let promise = fetch(this.API_URL + '/meetups/' + this.MEETUP_ID);
      promise.then(response => {
        return response.json();
      }).then(data => {
        this.meetups = data;
      });
    },
  },
  computed: {
    setImage() {
      return {
        '--bg-url': this.meetups.imageId ? 'url(' + getImageUrlByImageId(this.meetups.imageId) + ')' : '',
      }
    }
  }
}).$mount('#app');

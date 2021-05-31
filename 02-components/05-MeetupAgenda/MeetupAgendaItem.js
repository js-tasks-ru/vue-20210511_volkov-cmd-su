import { agendaItemIcons, agendaItemDefaultTitles } from './data.js';

const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  components: {

  },
  props: {
    agendaItem: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      agendaItemIcons,
      agendaItemDefaultTitles,
    }
  },
  computed: {
    getTitle() {
      return this.agendaItem.title ? this.agendaItem.title : this.agendaItemDefaultTitles[this.agendaItem.type];
    },
  },

  template: `
    <div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="'/assets/icons/icon-' + agendaItemIcons[agendaItem.type] + '.svg'" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt + ' - ' + agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ getTitle }}</h5>
        <p v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p>{{ agendaItem.description }}</p>
      </div>
    </div>`,
};

export default MeetupAgendaItem;

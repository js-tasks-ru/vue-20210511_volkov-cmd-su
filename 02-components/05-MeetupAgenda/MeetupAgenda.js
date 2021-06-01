import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',
  props: {
    agenda: {
      type: Array,
      required: true,
    }
  },
  components: {
    MeetupAgendaItem,
  },

  template: `
    <div>
        <meetup-agenda-item v-for="(agItem, id) in agenda" :key="id" :agenda-item="agItem"/>
    </div>
    `,
};

export default MeetupAgenda;

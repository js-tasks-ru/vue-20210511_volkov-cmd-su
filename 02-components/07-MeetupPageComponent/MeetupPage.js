import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',
  components: {
    MeetupView,
  },
  mounted() {
    this.getMeetup();
  },
  data() {
    return {
      meetup: null,
    }
  },
  methods: {
    getMeetup() {
      fetchMeetup(MEETUP_ID).then(data => {
        this.meetup = data;
      });
    }
  },

  template: `<div v-if="meetup">
      <MeetupView :meetup="meetup"/>
  </div>`,
};

export default MeetupPage;

const MeetupCover = {
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
  },

  template: `
      <div class="meetup-cover" :style="{'--bg-url': link ? 'url(' + link + ')' : ''}">
        <h1 class="meetup-cover__title">{{ title }}</h1>
      </div>
    `,
};

export default MeetupCover;

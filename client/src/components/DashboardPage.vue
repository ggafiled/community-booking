<template>
  <v-container fluid>
      <v-flex text-center justify-center>
        <v-text-field v-model="time1" @keydown.enter="gotoDate">
          <template v-slot:label>
          What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">find_in_page</v-icon>
        </template>
        </v-text-field>
        <full-calendar ref="calendar" :events="calendarEvents"></full-calendar>

      </v-flex>
  </v-container>

</template>
<script>
  import moment from 'moment';
  import {
    FullCalendar
  } from 'vue-full-calendar'
  export default {
    components: {
      FullCalendar, // make the <FullCalendar> tag available

    },
    ready: function () {
      var self = this
      self.cal = $(self.$el)
      show()
    },
    data() {
      return {
        time1: null,
        calendarEvents: [{
            id: 1,
            title: 'event1',
            start: moment().hours(12).minutes(0),
          },
          {
            id: 2,
            title: 'event2',
            start: moment().add(-1, 'days'),
            end: moment().add(1, 'days'),
            allDay: true,
          },
          {
            id: 3,
            title: 'event3',
            start: moment().add(2, 'days'),
            end: moment().add(2, 'days').add(6, 'hours'),
            allDay: false,
          },
        ],
      }
    },
    methods: {
      gotoDate(e) {
        console.log(this.time1)
        this.$refs.fullCalendar('gotoDate', this.time1);
      }
    },
    computed: {
      eventSources() {
        const self = this;
        return [{
          events(start, end, timezone, callback) {
            setTimeout(() => {
              callback(self.events.filter(() => Math.random() > 0.5));
            }, 1000);
          },
        }, ];
      },
    },
  }

</script>
<style>

</style>

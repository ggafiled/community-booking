<template>
  <div class="container">
    <date-picker v-model="time1" type="date" placeholder="Select your appointment" @onClick="show"></date-picker>
    <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" height='parent' selectable=false navLinks=true
      nowIndicator=true :header="header"/>
  </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import DatePicker from 'vue2-datepicker';

  export default {
    components: {
      FullCalendar, // make the <FullCalendar> tag available
      DatePicker
    },
    data() {
      return {
        time1: null,
        calendarPlugins: [
          dayGridPlugin,
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ],
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        calendarEvents: [ // initial event data
          {
            title: 'Event Now',
            start: new Date()
          }
        ]
      }
    },
    methods: {
      show(date){
        console.log('click')
        console.log(date)
      }
    },
  }

</script>
<style>

</style>

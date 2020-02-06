<template>
  <div class="container">
    <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" height='parent' selectable=false navLinks=true
      nowIndicator=true :header="header"/>
  </div>
</template>
<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'

  export default {
    components: {
      FullCalendar // make the <FullCalendar> tag available
    },
    data() {
      return {
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
    }
  }

</script>
<style>

</style>

<template>
  <base-layout>
    <div id="calendar" slot="body">
      <calendar-view
        :show-date="showDate"
        @show-date-change="setShowDate"
        :displayPeriodUom="calendar.displayPeriod"
        :time-format-options="{hour: 'numeric', minute:'2-digit'}"
        :show-event-times="calendar.showEventTimes"
        :events="events"
        @click-event="showEvent"
        class="theme-default holiday-us-traditional holiday-us-official">
        <!-- <span slot="header"></span> -->
      </calendar-view>
    </div>
  </base-layout>
</template>
<script>
import BaseLayout from '../layouts/BaseLayout.vue';
import CalendarView from 'vue-simple-calendar';
require("vue-simple-calendar/dist/static/css/default.css");
require("vue-simple-calendar/dist/static/css/holidays-us.css");

// TODO: try mo mag gawa ng sarili mong button tapos try to emit default controls from header.

export default {
  name: 'Schedule',
  data() {
    return { 
      showDate: new Date(),
      calendar: {
        displayPeriod: 'month',
        showEventTimes: true,
      },
      events: [
        {
          id: 1,
          title: 'Happy Birthday!',
          startDate: '2018-07-11 08:30:00',
          endDate: '2018-07-12 02:00:00',
          url: 'www.google.com',
        }
      ],
    };
  },
  components: {
    BaseLayout,
    CalendarView
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
    showEvent(event) {
      // alert(event);
      console.log(event);
    },
    preveMonth() {
      this.$emit('previousPeriod');
    }
  }
}
</script>

<style scoped>
#calendar {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
</style>



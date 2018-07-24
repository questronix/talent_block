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
import axios from 'axios';
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
          classes: 'birthday'
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
      alert(event.title);
      console.log(event);
    },
    preveMonth() {
      this.$emit('previousPeriod');
    },
    getEnrolledCourses() {
      //FIXME: Dapat nakukuha yung id ng schedule
      let id = 35;
      axios.get(`/students/${id}/coursesEnrolled`)
        .then((response) => {
          let e = response.data[0];
          this.events.push({
            id: 2,
            title: e.course_name,
            startDate: `2018-07-16 08:30:00`,
            endDate: '2018-07-17 02:00:00',
            classes: 'birthday'
          });
          console.log(response.data);
        }).catch((err) => {
          console.log('Error while getting enrolled courses: ', err);
        });
    }
  },
  created() {
    this.getEnrolledCourses();
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

.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
}
.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	background-color: white;
}
/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}
/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */

/* Add some styling for events tagged with the "birthday" class */
.calendar .event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}
.calendar .event.birthday::before {
	content: "\1F382";
	margin-right: 0.5em;
}
</style>



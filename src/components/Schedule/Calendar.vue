<template>
  <div id="calendar">
    <calendar-view
      :show-date="showDate"
      @show-date-change="setShowDate"
      :displayPeriodUom="calendar.displayPeriod"
      :time-format-options="{hour: 'numeric', minute:'2-digit'}"
      :show-event-times="calendar.showEventTimes"
      :events="events"
      @click-event="showEvent"
      class="theme-default">
      <!-- <span slot="header"></span> -->
    </calendar-view>
    
    <!-- Event Modal Information -->
    <b-modal id="eventInfoModal"
      title="Information"
      ok-only
      >
      <div slot="modal-header"></div>
      <b-card :title="selectedEvent.title"
          :sub-title="selectedEvent.school">
        <p class="card-text">
            <font-awesome-icon icon="clock" /> {{ selectedEvent.time }} 
            <font-awesome-icon icon="calendar" class="ml-2" /> {{ selectedEvent.date }} <br />
            <font-awesome-icon icon="map-marker" /> {{ selectedEvent.address }} <br />
            <font-awesome-icon icon="chalkboard-teacher" /> {{ selectedEvent.teacher }}
        </p>
      </b-card>
    </b-modal>
  </div>
</template>
<script>
// import BaseLayout from '../layouts/BaseLayout.vue';
import CalendarView from 'vue-simple-calendar';
import axios from 'axios';
import moment from 'moment';
require("vue-simple-calendar/dist/static/css/default.css");
require("vue-simple-calendar/dist/static/css/holidays-us.css");

// TODO: try mo mag gawa ng sarili mong button tapos try to emit default controls from header.

export default {
  name: 'Calendar',
  data() {
    return { 
      showDate: new Date(),
      calendar: {
        displayPeriod: 'month',
        showEventTimes: true,
      },
      events: [],
      selectedEvent: {},
    };
  },
  components: {
    CalendarView
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
    showEvent(event) {
      this.selectedEvent = event.originalEvent;
      this.selectedEvent.time = `${moment(this.selectedEvent.startDate).format('h:mm a')} - ${moment(this.selectedEvent.endDate).format('h:mm a')}`;
      this.selectedEvent.date = `${moment(this.selectedEvent.startDate).format('MMMM Do')} - ${moment(this.selectedEvent.endDate).format('MMMM Do')}`;
      this.$root.$emit('bv::show::modal','eventInfoModal');
      console.log(this.selectedEvent);
    },
    preveMonth() {
      this.$emit('previousPeriod');
    },
    getEnrolledCourses() {
      let id = this.$store.getters.getUser.id;
      axios.get(`/students/${id}/coursesEnrolled`)
        .then((response) => {
          let e = response.data.map(e => {
            return {
              id: e.sched_id,
              title: e.course_name,
              startDate: `${e.start_date} ${e.start_time}`,
              endDate: `${e.end_date} ${e.end_time}`,
              classes: 'purple',
              school: e.school_name,
              // FIXME: Add name extension or profession like engr, prof, dr, etc. 
              teacher: `${e.teacher_fn} ${e.teacher_ln}`,
              address: e.address,
            };
          });
          this.events = e;
        }).catch((err) => {
          console.log('Error while getting enrolled courses: ', err);
        });
    }
  },
  mounted() {
    this.getEnrolledCourses();
  }
}
</script>

<style scoped>
#calendar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
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

/* Our custom CSS */
h4.card-title {
    text-align: left;
}
</style>



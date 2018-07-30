<template>
<b-list-group class="schedtimeline">
  <b-list-group-item>
    <h4>My Schedule Timeline</h4>
    <div v-if="events.length > 0">
      <b-card class="text-left sched-card" v-for="event in events" :key="event.id">
        <b-container>
          <b-row>
            <b-col>
              <span>{{ toDay(event.startDate) }}</span>
              <br>
              <h5> {{ toDate(event.startDate, event.endDate) }}</h5>
            </b-col>
            <b-col cols="7">
              <!-- time and course name -->
              <b-row class="timeline-timecourse-row">
                <h6>{{ event.title }}</h6>
                <p> <font-awesome-icon icon="clock" /> {{ toTime(event.startDate) }} - {{ toTime(event.endDate) }} <br />
                <font-awesome-icon icon="map" /> {{ event.address }}</p>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
    <div v-else>
      <p>You're not enrolled to any courses.</p>
    </div>
  </b-list-group-item>
</b-list-group>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Timeline',
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getEnrolledCourses() {
      let id = this.$store.getters.getUser.id;
      axios.get(`/students/${id}/coursesEnrolled`)
        .then((response) => {
          let e = response.data.map(e => {
            return {
              id: e.id,
              sched: e.sched_id,
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
    },
    toTime(date) {
      return moment(date).format('h:mm a');
    },
    toDay(date) {
      return moment(date).format('ddd');
    },
    toDate(startDate, endDate) {
      if (moment(startDate).format('MM DD') === moment(endDate).format('MM DD')) {
        return moment(startDate).format('MMMM DD YYYY');
      }else if (moment(startDate).format('DD') > moment(endDate).format('DD')){
        return `${moment(startDate).format('MMMM DD')} - ${moment(endDate).format('MMMM DD, YYYY')}`;
      }
      return `${moment(startDate).format('MMMM DD')} - ${moment(endDate).format('DD YYYY')}`;
    }
  },
  mounted() {
    this.getEnrolledCourses();
  }
};
</script>

<style scoped>
.schedtimeline {
  margin: 20px 0;
}

.schedtimeline .sched-card {
  margin: 20px 0;
}

.timeline-timecourse-row {
  margin: 10px 0;
}
</style>

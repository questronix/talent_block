<template>
    <div>
        <b-card class="text-left course-sched"  v-for="sched in schedule" :key="sched">
            <b-container>
                <b-row >
                <b-col>
                    {{showMonthRange}} {{showDayRangeFrom}}-{{showDayRangeTo}}, {{showYearRange}}
                </b-col>
                <b-col>
                    {{sched.start_time}} - {{sched.end_time}}
                </b-col>
                <b-col>
                    {{sched.teacher_fn}}  {{sched.teacher_ln}}
                </b-col>
                <b-col>
                    <button class="btn btn-primary" @click="showPaymentModal">Enroll now for 200 coins</button>
                </b-col>
                </b-row>
            </b-container>
        </b-card>
        <b-card v-if="schedule.lenght <= 0">
            <p>There are no available schedule for this course</p>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'ScheduleList',
    data() {
        return {
            schedule: []
        };
    },
    methods: {
        getSched() {
            axios.get('/courses/' + this.$route.query.id + '/schedule')
            .then((response) => {
                this.schedule = response.data.data
                console.log(this.schedule)
            }).catch((err)=> {
                console.log('Schedule error', err)
            });
        }
    },
    computed: {
        showDayRangeFrom() {
            return moment(this.schedule.start_date).format('DD');
        },
        showDayRangeTo() {
            return moment(this.schedule.end_date).format('DD');
        },
        showMonthRange() {
            return moment(this.schedule.start_date).format('MMMM');
        },
        showYearRange() {
            return moment(this.schedule.start_date).format('YYYY');
        }
    },
    beforeMount() {
        this.getSched()
    }
};
</script>


<template>
    <div>
        <b-card class="text-left course-sched" v-for="sched in schedule" :key="sched.schedule_id">
            <b-container>
                <b-row >
                <b-col>
                    {{showDate(sched.start_date, sched.end_date)}}
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
            <!-- payment modal -->
            
        </b-card>
        <b-card v-if="schedule.length <= 0">
            <p>There is no available schedule for this course</p>
        </b-card>
        <div>
            <b-modal ref="payModal" hide-footer title="Payment Summary">
                <div class="d-block text-left payment-summary-content">
                <!-- <span class="course-amount-info">Coin <h2>200</h2></span> -->
                <h4 style="clear:both">{{courses.name}}</h4>
                <hr>
                <p>{{courses.short_desc}}</p>
                <p>{{schedule.start_date}}, {{schedule.start_time}} - {{schedule.end_time}}</p>
                </div>
                <b-btn class="mt-3 paymodal-btn" variant="success" block @click="confirmEnroll()">Enroll for 256 coins</b-btn>
            </b-modal>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'ScheduleList',
    data() {
        return {
            courses: [],
            schedule: [],
            schedDisplay: 'calendar',
            selectedSched: {}
        };
    },
    methods: {
        getSched() {
             axios.get('/courses/' + this.$route.query.id)
            .then((response) => {
                this.courses = response.data.course[0];
            }).catch((err) => {
                console.log('Course error ', err)
            });

            axios.get('/courses/' + this.$route.query.id + '/schedule')
            .then((response) => {
                this.schedule = response.data.data
            }).catch((err)=> {
                console.log('Schedule error', err)
            });
        },
        showPaymentModal () {
            this.$refs.payModal.show()
        },
        hidePaymentModal () {
            this.$refs.payModal.hide()
        },
        showDate(start_date, end_date) {
            if(moment(start_date).format('MM DD') === moment(end_date).format('MM DD')) {
                return `${moment(start_date).format('MM DD, YYYY')}`;
            }else if (moment(start_date).format('DD') > moment(end_date).format('DD')){
                return `${moment(start_date).format('MMMM DD')} - ${moment(end_date).format('MMMM DD, YYYY')}`;
            }
            return `${moment(start_date).format('MMMM DD')} - ${moment(end_date).format('DD, YYYY')}`;
        },
        confirmEnroll() {
           this.$router.push('/transaction/receipt') 
        }
    },
    computed: {

    },
    beforeMount() {
        this.getSched()
    }
};
</script>


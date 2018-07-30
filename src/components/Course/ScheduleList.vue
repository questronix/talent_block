<template>
    <div>
        <b-card class="text-left course-sched" v-for="sched in schedule" :key="sched.schedule_id">
            <b-container>
                <b-row >
                <b-col>
                    {{showDate(sched.start_date, sched.end_date)}}
                </b-col>
                <b-col>
                    {{toTime(`${sched.start_date} ${sched.start_time}`)}} - {{toTime(`${sched.end_date} ${sched.end_time}`)}}
                </b-col>
                <b-col>
                    {{sched.teacher_fn}}  {{sched.teacher_ln}}
                </b-col>
                <b-col>
                    <button class="btn btn-primary" @click="showPaymentModal(sched)">Enroll now for {{sched.price}} coins</button>
                </b-col>
                </b-row>
            </b-container>            
        </b-card>
        <div>
            <b-modal id="payModal" ref="payModal" hide-footer title="Payment Summary">
                <div class="d-block text-left payment-summary-content">
                <h4 style="clear:both">{{courses.name}}</h4>
                <hr>
                <p>{{courses.short_desc}}</p>
                <p><font-awesome-icon icon="calendar" /> {{showDate(selectedSched.start_date, selectedSched.end_date)}}, <font-awesome-icon icon="clock" class="ml-2" /> {{toTime(`${selectedSched.start_date} ${selectedSched.start_time}`)}} - {{toTime(`${selectedSched.end_date} ${selectedSched.end_time}`)}}</p>
                <p><font-awesome-icon icon="chalkboard-teacher" /> {{selectedSched.teacher_fn}} {{selectedSched.teacher_ln}}</p>
                </div>
                <b-btn class="mt-3 paymodal-btn" variant="success" block @click="confirmEnroll">Enroll for {{selectedSched.price}} coins</b-btn>
            </b-modal>
        </div>
    </div>
</template>

<script>
import GetCourse from '../../Mixins/Course/GetCourse';
import GetSchedule from '../../Mixins/Schedule/GetSchedule';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'ScheduleList',
    data() {
        return {
            courses: [],
            schedule: [],
            selectedSched: {},
            schedDisplay: 'calendar'
        };
    },
    mixins: [GetCourse, GetSchedule],
    methods: {
        
        showPaymentModal (sched) {
            this.selectedSched = sched;
            this.$refs.payModal.show();
        },
        hidePaymentModal () {
            this.$refs.payModal.hide()
        },
        showDate(start_date, end_date) {
            if(moment(start_date).format('MM DD') === moment(end_date).format('MM DD')) {
                return `${moment(start_date).format('MMMM DD, YYYY')}`;
            }else if (moment(start_date).format('DD') > moment(end_date).format('DD')){
                return `${moment(start_date).format('MMMM DD')} - ${moment(end_date).format('MMMM DD, YYYY')}`;
            }
            return `${moment(start_date).format('MMMM DD')} - ${moment(end_date).format('DD, YYYY')}`;
        },
        toTime(time) {
            return moment(time).format('h:mm a');
        },
        confirmEnroll() {
            axios.post('/students/enroll', {
              schedule_id: this.selectedSched.schedule_id,
              amount: this.selectedSched.price,
              pay_at: 'U_BANK',
            })
            .then((response) => {
              this.$toasted.success('You are now enrolled.');
              window.location.href = `#/transaction/receipt?sched=${response.data.schedule.schedule_id}&w=${response.data.wallet.id}`;
            }).catch((err) => {
              console.log('Error ', err);
            });
            this.$router.push(`/transaction/receipt?sched=${this.selectedSched.schedule_id}`);
        }
    },
    computed: {

    },
};
</script>

<style scoped>
div#payModal___BV_modal_body_ {
    padding: 0;
}

.d-block.text-left.payment-summary-content {
    padding: 2rem 2rem 1rem 2rem;
}

button.btn.mt-3.paymodal-btn.btn-success.btn-block {
    padding: 1rem;
}
</style>


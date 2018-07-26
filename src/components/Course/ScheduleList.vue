<template>
    <b-row>
        <b-col>
            July 26-30, 2017
        </b-col>
        <b-col>
            1:00 PM - 2:00 PM
        </b-col>
        <b-col>
            Teacher G. Maestra
        </b-col>
        <b-col>
            200
        </b-col>
        <b-col>
            <button class="btn btn-primary" @click="showPaymentModal">Enroll Now</button>
        </b-col>
    </b-row>
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
            axios.get('/schedule/' + this.$route.query.id)
            .then((response) => {
                this.schedule = response.data.schedule[0]
                console.log(this.schedule)
            }).catch((err)=> {
                console.log('Schedule error', err)
            });
        }
    },
    beforeMount() {
        this.getSched()
    }
};
</script>


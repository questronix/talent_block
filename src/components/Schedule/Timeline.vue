<template>
<b-list-group class="schedtimeline">
    <b-list-group-item>
        <h4>My Schedule Timeline</h4>
        <b-card class="text-left sched-card">
            <b-container>
                <b-row>
                    <b-col>
                        <span>Tuesday</span>
                        <br>
                        <h4>July 24, 2017</h4>
                    </b-col>
                    <b-col cols="9">
                        <b-list>
                            <!-- time and course name -->
                            <b-row class="timeline-timecourse-row">
                                Responsive Website Basics: Code with HTML, CSS, and JavaScript
                                <br>1:00PM-2:00PM
                            </b-row>

                            <!-- time and course name -->
                            <b-row class="timeline-timecourse-row">
                                Responsive Web Design
                                <br>3:00PM-2:00PM
                            </b-row>
                        </b-list>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>

        <b-card class="text-left sched-card">
            <b-container>
                <b-row>
                    <b-col>
                        <span>Monday</span>
                        <br>
                        <h4>July 30, 2017</h4>
                    </b-col>
                    <b-col cols="9">
                        <b-list>
                            <!-- time and course name -->
                            <b-row class="timeline-timecourse-row">
                                Responsive Website Basics: Code with HTML, CSS, and JavaScript
                                <br>1:00PM-2:00PM
                            </b-row>

                            <!-- time and course name -->
                            <b-row class="timeline-timecourse-row">
                                Responsive Web Design
                                <br>3:00PM-2:00PM
                            </b-row>
                        </b-list>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>
    </b-list-group-item>
</b-list-group>
</template>

<script>
export default {
    name: 'Timeline'
}
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

<template>
    <div>
    <!-- Modal Component -->
    <b-modal id="addCourseModal"
             ref="addCourseModal"
             title="Add Course"
			 size="lg"
             ok-title="Add"
			 @ok="onOk"
			 @cancel="onCancel">
    	<form>
            <b-row>
                <b-col>
                    <b-form-group id="nameOfCourseGroup"
                                label="Name of course">
                        <b-form-input type="text"
                                placeholder="Enter name of course"
                                v-model="form.nameOfCourse"
                                required
                                ></b-form-input>
                    <b-form-group />
                    <b-form-group	id="facultyAssignedGroup"
                                    label="Faculty assigned"
                                    >
                    <b-form-select v-model="form.facultyAssigned" :options="facultyOptions" class="mb-3" required/>
                    <b-form-group />
                    <b-form-group	id="courseVenueGroup"
                                    label="Course venue"
                                    >
                    <b-form-select v-model="form.courseVenue" :options="courseVenueOptions" class="mb-3" required/>
                    <b-form-group />
                    <b-form-group	id="courseScheduleGroup"
                                    label="Course Schedule"
                                    >
                    <b-form-select v-model="form.courseSchedule" :options="timeOptions" class="mb-3" required/>
                    <b-form-group />
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <b-form-group	id="courseCodeGroup"
                                            label="Course code"
                                            >
                            <b-form-input type="text"
                                    placeholder="Enter course code"
                                    v-model="form.courseCode"
                                    required
                                    ></b-form-input>
                            <b-form-group />
                        </b-col>
                        <b-col>
                            <b-form-group	id="maxStudentsGroup"
                                            label="Max. students"
                                            >
                            <b-form-input type="text"
                                    placeholder="Enter max. students"
                                    v-model="form.maxStudents"
                                    required
                                    ></b-form-input>
                            <b-form-group />
                        </b-col>
                    </b-row>
                    <b-form-group	id="courseDescriptionGroup"
                                    label="Course description"
                                    >
                     <b-form-textarea id="textarea1"
                        v-model="form.courseDescription"
                         placeholder="Enter course description"
                         rows="8"
                         max-rows="10">
                     </b-form-textarea>
                    <b-form-group />
                </b-col>
            </b-row>
		</form>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: 'AddCourseModal',
    data () {
        return {
            form: {
                nameOfCourse: '',
                facultyAssigned: null,
                courseVenue: null,
                courseSchedule: null,
                courseCode: '',
                maxStudents: '',
                courseDescription: '',
            },
            timeOptions:[
                { value: null, text: 'Please select a timeslot', disabled:true },
                { value: '14:00-16:00', text: '14:00-16:00' },
                { value: '16:00-18:00', text: '16:00-18:00' },
                { value: '18:00-20:00', text: '18:00-20:00' },
                { value: '20:00-22:00', text: '20:00-22:00' },
                
            ],
            facultyOptions: [
                { value: null, text: 'Please select a faculty', disabled:true },
                { value: 'Daimler Clavel', text: 'Daimler Clavel' },
                { value: 'Paolo Astudillo', text: 'Paolo Astudillo' },
                { value: 'Zyra Grubat', text: 'Zyra Grubat' },
                { value: 'Noreen Rojales', text: 'Noreen Rojales' },

            ],
            courseVenueOptions: [
                { value: null, text: 'Please select a venue', disabled:true },
                { value: 'Comp 302' , text: 'Comp 302' },
                { value: 'Comp 303', text: 'Comp 303' },
                { value: 'Comp 304', text: 'Comp 304' },
                { value: 'Comp 305', text: 'Comp 305' },
            ],

            }
        },
  methods: {

    onOk (evt) {
		console.log(this.form);
		this.$refs.addCourseModal.hide()
    },
    onCancel (evt) {
        this.form.nameOfCourse = '';
        this.form.facultyAssigned = '';
        this.form.courseVenue = '';
        this.form.courseSchedule = '';
        this.form.courseCode = '';
        this.form.maxStudents = '';
        this.form.courseDescription = '';
	  
    }
  }
}

</script>

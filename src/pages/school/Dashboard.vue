<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Dashboard" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">

	    <div class="accountstats py-2">
		<!-- PROFILE PICTURE -->
		<div class="profile-pic">
			<img src="/static/img/photo1.png" class="rounded-circle">
		</div>

		<!-- PROFILE NAME -->
		<div class="profile-name">
			<h3>PUP Sta. Mesa</h3>
		</div>

      <div class="profile-stats">
			<b-container>
				<b-row>
					<b-col>
						<span>Courses</span>
						<h3>{{coursesLength}}</h3>
					</b-col>
					<b-col>
						<span>Students</span>
						<h3>23</h3>
					</b-col>
					<b-col>
						<span>Professors</span>
						<h3>{{facultyLength}}</h3>
					</b-col>
                    <b-col>
						<span>Schedule</span>
						<h3></h3>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>

	<div class="dashboard accountforms">
		<b-container>

			<b-row>
				<b-col cols="3" class="dash-account-basic">
					<router-link class="btn-acnt-sttngs" :to="{ name: 'settings' }">Account Settings</router-link>
					<!-- <a class="btn">Account Settings</a> -->
					<div class="dab-info">
						
						<p>pupstamesa@edu.ph</p>
						<p>Anonas, Santa Mesa, Maynila</p>
						<p>Joined since <span>March 2, 2016</span></p>
						<p>+64-9xx-xxxx-xxx</p>
					</div>
				</b-col>

				<b-col>
                    <b-container fluid>
                        <b-row>
                            <b-col sm="2">
                            </b-col>
                            <b-col sm="8">
                                <h4 class="h4-centered">Our Courses</h4>
                            </div>
                            <div class="col-sm-2">
                                <b-btn variant="primary" v-b-modal.addCourseModal>Add a course</b-btn>

                                <AddCourseModal />
                            </b-col>
                        </b-row>
                    </b-container>
					<b-container class="justify-content-end padded-white">
						<b-table :fields="coursesFields" per-page=5 :current-page="currentCoursePage" :items="courses" class="table table-borderless text-center">
                            <template slot="action" slot-scope="row"> 
                                <b-btn variant="primary" v-b-modal.updateCourseModal>Update Course</b-btn>
                                <UpdateCourseModal />
                            </template>
                            
                        </b-table>

                         <b-pagination align="center" :total-rows="coursesLength" per-page=5 v-model="currentCoursePage"/>
					</b-container>
                    
					<b-container fluid class="mt-5">
                        <b-row>
                            <b-col sm="2">
                            </b-col>
                            <b-col sm="8" >
                                <h4 class="h4-centered">Faculty</h4>

                            </div>
                            <div class="col-sm-2">
                                 <b-btn variant="primary" v-b-modal.addFacultyModal>Add Faculty</b-btn>
                                <AddFacultyModal />
                            </b-col>
                        </b-row>
                    </b-container>
                    <b-container class="justify-content-end padded-white">
                        <b-table :fields="facultyFields" per-page=5 :current-page="currentFacultyPage" :items="faculty" class="table table-borderless text-center">
                            <template slot="action" slot-scope="row"> 
                                <b-btn variant="primary" v-b-modal.updateFacultyModal>Update Faculty</b-btn>
                                <UpdateFacultyModal />
                            </template>
                        </b-table>

                         <b-pagination align="center" :total-rows="facultyLength" per-page=5 v-model="currentFacultyPage"/>
						
					</b-container>
					
				</b-col>
			</b-row>			
		</b-container>
	</div>
	</div>
  </base-layout>
</template>

<script>
import BaseLayout from '../../layouts/BaseLayout.vue';
import NavBar from '../../components/NavBar/NavBar.vue';
import SchoolStats from '../../components/AccountStats/SchoolStats.vue';

import AddCourseModal from '../../components/Course/AddCourseModal.vue';
import UpdateCourseModal from '../../components/Course/UpdateCourseModal.vue';

import AddFacultyModal from '../../components/Faculty/AddFacultyModal.vue';
import UpdateFacultyModal from '../../components/Faculty/UpdateFacultyModal.vue';

export default {
  name: 'dashboardSchool',
  components: {
    BaseLayout,
	NavBar,
    SchoolStats,

    AddFacultyModal,
    UpdateFacultyModal,

    AddCourseModal,
    UpdateCourseModal,
  },
  mounted(){
      this.getCoursesFacultyLength();
  },
  data: function(){
      return {
          coursesFields: [{ key: 'code', label: 'Subject Code'},
                          { key: 'name', label: 'Course Name' },
                          { key: 'students', label: 'Maximum Students' },
                          { key: 'action', label: 'Action' }],
          courses: [{code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course2', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course3', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course4', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course5', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course6', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course7', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course8', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course9', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course10', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course11', name: 'Fundamentals of UI/UX design', students: 30}],
          facultyFields: [{key: 'id', label: 'Faculty ID'},
                          {key: 'name', label: 'Faculty Name'},
                          {key: 'subjects', label: 'Subject Handled'},
                          {key: 'action', label: 'Action'}],
          faculty: [{id: '12341', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12342', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12343', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12344', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12345', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12346', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12347', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12348', name: 'Jay Tacdoro', subjects: 30}],
          currentCoursePage: 1,
          currentFacultyPage: 1,
          facultyLength: 0,
          coursesLength: 0
      }
  },
  methods: {
      getCoursesFacultyLength(){
          this.coursesLength = this.courses.length;
          this.facultyLength = this.faculty.length;
      }
  }
}
</script>

<style scoped>
.btn-acnt-sttngs {
	background-color: gray;
	color: white;
	padding: 10px;
	border-radius: 10px;
}
</style>

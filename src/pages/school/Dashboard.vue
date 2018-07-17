<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Dashboard" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
	<SchoolStats />
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

				<div class="col scheds">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-2">
                            </div>
                            <div class="col-sm-8">
                                <h4 class="h4-centered">Our Courses</h4>
                            </div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addCourseModal">Add a course</button>
                                <AddCourseModal />
                            </div>
                        </div>
                    </div>
					<div class="sched-calendar justify-content-end padded-white">
						<table class="table table-borderless text-center">
                            <thead>
                                <tr>
                                    <th>Subject Code</th>
                                    <th>Course Name</th>
                                    <th>Max Students</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(course, index) in courses" :key="index">
                                    <td> {{course.code}} </td>
                                    <td> {{course.name}} </td>
                                    <td> {{course.students}} </td>
                                    <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateCourseModal">Update</button> </td>
                                    <UpdateCourseModal />
                                </tr>
                            </tbody>
                        </table>
					</div>
					<div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-2">
                            </div>
                            <div class="col-sm-8">
                                <h4 class="h4-centered">Faculty</h4>
                            </div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addFacultyModal">Add a faculty</button>
                                <AddFacultyModal />
                            </div>
                        </div>
                    </div>
                    <div class="sched-calendar justify-content-end padded-white">
						<table class="table table-borderless text-center">
                            <thead>
                                <tr>
                                    <th>Faculty ID</th>
                                    <th>Faculty Name</th>
                                    <th>Subject Handled</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, index) in faculty" :key="index">
                                    <td> {{member.id}} </td>
                                    <td> {{member.name}} </td>
                                    <td> {{member.subjects}} </td>
                                    <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateFacultyModal">Update</button> </td>
                                    <UpdateFacultyModal />
                                </tr>
                            </tbody>
                        </table>
					</div>
					
				</div>
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
  data: function(){
      return {
          courses: [{code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course1', name: 'Fundamentals of UI/UX design', students: 30},
                    {code: 'course1', name: 'Fundamentals of UI/UX design', students: 30}],
          faculty: [{id: '12345', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12345', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12345', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12345', name: 'Jay Tacdoro', subjects: 30},
                    {id: '12345', name: 'Jay Tacdoro', subjects: 30},]
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

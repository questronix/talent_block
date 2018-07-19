<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Dashboard" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
	<AccountStats :fn="profile.fn" :ln="profile.ln"/>
	<div class="dashboard accountforms">
		<b-container>

			<b-row>
				<b-col cols="3" class="dash-account-basic">
					<router-link class="btn-acnt-sttngs" :to="{ name: 'settings' }">Account Settings</router-link>
					<!-- <a class="btn">Account Settings</a> -->
					<div class="dab-info">
						
						<p>jaytacdoro@gmail.com</p>
						<p>617 Purok 6 Brgy. Nueva, San Pedro Laguna</p>
						<p>Joined since <span>March 2, 2016</span></p>
						<p>+64-9xx-xxxx-xxx</p>

						<b-btn v-b-modal.profileModal>Update</b-btn>
						<!-- Main UI -->
						<!-- Modal Component -->
						<b-modal id="profileModal" ok-only
										ref="profileModal"
										title="Submit your name" @ok="handleSubmit">
							<form @submit.stop.prevent="handleSubmit">
								<b-form-input type="text"
									placeholder="Enter your first name"
									v-model="profile.fn"></b-form-input>
									<b-form-input type="text"
									placeholder="Enter your last name"
									v-model="profile.ln"></b-form-input>
									<b-form-textarea type="text"
									placeholder="Enter your address"
									v-model="profile.address"></b-form-textarea>
							</form>
						</b-modal>
					</div>
				</b-col>

				<div class="col scheds">
					<h4 class="h4-centered">My Schedule</h4>
					
					<div class="sched-calendar padded-white">
						
					</div>
					<h4 class="h4-centered">Currently Enrolled Subjects</h4>
					<div class="cur-enrld-sub padded-white">
					
						<h4>Fundamentals of UI/UX design</h4>
						<div class="row">
							<div class="col">
								<p>at Polytechnic University of the Philippines</p>
							</div>

							<div class="col">
								Enrolled since: July 30, 2018
							</div>

							<div class="col">
								Certificate: Not available
							</div>
						</div>
						
					</div>
					<div class="completed-sub">
						<h4 class="h4-centered">Completed Subjects</h4>
						<div class="padded-white">
							<div class="completed-sub-detail">
								<h4>Node JS: Getting Started</h4>
								<b-row>
									<b-col>
										<p>at Polytechnic University of the Philippines</p>
									</b-col>
									<b-col>
										<p>Enrolled since: July 30, 2018</p>
									</b-col>
									<b-col>
										<p>Certificate:</p>
									</b-col>
								</b-row>
							</div>

							<div class="completed-sub-detail">
								<h4>Node JS: Getting Started</h4>
								<b-row>
									<b-col>
										<p>at Polytechnic University of the Philippines</p>
									</b-col>
									<b-col>
										<p>Enrolled since: July 30, 2018</p>
									</b-col>
									<b-col>
										<p>Certificate:</p>
									</b-col>
								</b-row>
							</div>

							<div class="completed-sub-detail">
								<h4>Node JS: Getting Started</h4>
								<b-row>
									<b-col>
										<p>at Polytechnic University of the Philippines</p>
									</b-col>
									<b-col>
										<p>Enrolled since: July 30, 2018</p>
									</b-col>
									<b-col>
										<p>Certificate:</p>
									</b-col>
								</b-row>
							
							</div>
						</div>
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
import AccountStats from '../../components/AccountStats/AccountStats.vue';
// import StudentInfoModal from '../../components/Student/StudentInfoModal.vue';
import axios from 'axios';

export default {
	name: 'dashboard',
	data() {
		return {
			user: {},
			profile: {},
			needsUpdate: false,
			form: {
				firstName: '',
				middleName: '',
				lastName: '',
				address: '',
		},
		};
	},
  components: {
    BaseLayout,
		NavBar,
		AccountStats,
		// StudentInfoModal
	},
	methods: {
		checkProfile() {
			let id = 32;
			this.profile.user_id = id;
			axios.get(`/students/${id}`)
				.then((response) => {
					this.profile = response.data;
				}).catch((err) => {
					console.log(err);
				})
				.then(() => {
					if (!this.profile.id) {
						this.$refs.profileModal.show();
					}
				});
		},
		handleSubmit() {
			axios.post('/students', this.profile)
				.then((response) => {
					console.log(response);
					needsUpdate = false;
				}).catch((err) => {
					console.log(err);
				});
		}
	},
	mounted() {
		this.checkProfile();

	},
	computed: {
		hasProfile() {
			if (!this.profile.id) {
				this.$refs.profileModal.show();
			}
			// return false;
		}
	},
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

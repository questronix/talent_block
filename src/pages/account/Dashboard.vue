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
						<p><img src="/static/img/msg.svg" height="24" width="24"> <!-- email here --></p> 
						<p><img src="/static/img/address.svg" height="24" width="24"> <!--address here --></p> 
						 <p><img src="/static/img/calendar.svg" height="24" width="24"> Joined since <span><!-- join date --></span></p>
						<p><img src="/static/img/mobile.svg" height="24" width="24"> <!--  number here --></p> 
						<button id="show-modal" @click="showModal = true">Show Modal</button>
					</div>
				</b-col>

				<div class="col scheds">
					<div class="sched-calendar padded-white stud-bg">
						<div class="bg-student">
							<h4>Educational Background</h4><button class="btn add">Add</button>
							<hr>
							<div class="stud-bg-content">
								<b-row>
								<button class="btn update btn-sm">Update</button>
								</b-row>
								<b-row class="stud-bg-row">
									<b-col>
										School:
									</b-col>
									<b-col>
										CNSC
									</b-col>
								</b-row>				
							</div>
						</div>
						<div class="bg-student">
							<h4>Occupation Background</h4><button  class="btn add">Add</button>
							<hr>
							<div class="stud-bg-content">
								<b-row>
									<button class="btn update btn-sm">Update</button>
									</b-row>
									<b-row class="stud-bg-row">
										<b-col>
											Position
										</b-col>
										<b-col>
											Web Developer
										</b-col>
									</b-row>
							</div>
						</div>
						<div class="bg-student">
							<h4>IDs</h4><button class="btn add">Add</button>
							<hr>
							<div class="stud-bg-content">
								<b-row>
								<button class="btn update btn-sm">Update</button>
								</b-row>
								<b-row class="stud-bg-row">
									<b-col>
										ID:
									</b-col>
									<b-col>
										SSS ID
									</b-col>
								</b-row>
							</div>
						</div>
						<div class="bg-student">
							<h4>Family Background</h4><button class="btn add">Add</button>
							<hr>
							<div class="stud-bg-content">
								<b-row>
								<button class="btn update btn-sm">Update</button>
								</b-row>
								<b-row class="stud-bg-row">
									<b-col>
										Father's Name:
									</b-col>
									<b-col>
										Juan Dela Cruz
									</b-col>
								</b-row>
							</div>
						</div>
					</div>

					 <!-- <div v-if="student">
						<DashboardCotent />
					
					</div>
					<div v-else>
						<Modal/>
					</div> -->
		
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

import DashboardCotent from '../../components/Dashboard/DashboardContent.vue';
import Modal from '../../components/Student/StudentInfoModal.vue';


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
  BaseLayout,
	NavBar,
	AccountStats,
	DashboardCotent,
	Modal
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

.stud-bg {
	position: relative;
}

.stud-bg h4, .stud-bg button{
	display: inline;
}

.btn.add {
	right: 40px;
	position: absolute;
}

.btn.update {
	text-align: right;
}

.stud-bg-content {
	padding: 10px;
}

.stud-bg-row {
	margin-bottom: 5px;
}
</style>

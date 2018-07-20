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
					<b-btn v-b-modal.profileModal>Account Settings</b-btn>
					<!-- <a class="btn">Account Settings</a> -->
					<div class="dab-info">
						<p>{{showName}}</p>
						<p><img src="/static/img/msg.svg" height="24" width="24"> {{user.email}}</p> 
						<p><img src="/static/img/mobile.svg" height="24" width="24"> {{ profile.contact_no }}</p>
						<p><img src="/static/img/address.svg" height="24" width="24"> {{profile.address}}</p> 
						<p><img src="/static/img/calendar.svg" height="24" width="24"> Joined since <span>{{ showJoinedDate }}</span></p>
					</div>
				</b-col>

				<!-- Main UI -->
				<!-- Modal Component -->
				<b-modal id="profileModal" ok-only
								ref="profileModal"
								title="Student Profile" @ok="handleSubmit">
					<form @submit.stop.prevent="handleSubmit">
							<b-form-group
								label="Enter your first name:"
								label-for="fn"
							>
								<b-form-input 
								id="fn"
								type="text"
								placeholder="First Name"
								v-model="profile.fn"></b-form-input>
							</b-form-group>

							<b-form-group
								label="Enter your last name:"
								label-for="ln"
							>
							<b-form-input type="text"
							id="ln"
							label="Enter your last name:"
							placeholder="Last Name"
							v-model="profile.ln"></b-form-input>
							</b-form-group>

							<b-form-group
								label="Enter your middle name:"
								label-for="mn"
							>
							<b-form-input type="text"
							id="mn"
							placeholder="Middle Name"
							v-model="profile.mn"></b-form-input>
							</b-form-group>

							<b-form-group
								label="Enter your contact no:"
								label-for="contact"
							>
							<b-form-input type="text"
							id="contact"
							placeholder="Contact No"
							v-model="profile.contact_no"></b-form-input>
							</b-form-group>

							<b-form-group
								label="Enter your address:"
								label-for="address"
							>
							<b-form-textarea type="text"
							id="address"
							v-model="profile.address"></b-form-textarea>
							</b-form-group>
					</form>
				</b-modal>
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
import moment from 'moment';

// import StudentInfoModal from '../../components/Student/StudentInfoModal.vue';
import axios from 'axios';

export default {
	name: 'dashboard',
	data() {
		return {
			user: this.$store.state.user || {},
			profile: {
				fn: '',
				ln: '',
				address: '',
				mn: '',
				contact_no: ''
			},
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
			//by default user have session in the server
			axios.get(`/students/me`)
				.then((response) => {
					//if there is no record
					this.profile = response.data;
				}).catch((err) => {
					console.log('Student Fetch' , err);
					//if there is no record
					if (!this.profile.id) {
						this.$refs.profileModal.show();
					}
				});
		},
		handleSubmit() {
			if(this.profile.user_id){
				axios.put('/students', this.profile)
				.then((response) => {
					console.log(response);
					this.needsUpdate = false;
				}).catch((err) => {
					console.log(err);
				});
			}else{
				axios.post('/students', this.profile)
				.then((response) => {
					console.log(response);
					this.needsUpdate = false;
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	},
	mounted() {
		console.log('Profile', this.$store.getters.getUser());
		this.checkProfile();

	},
	computed: {
		hasProfile() {
			if (!this.profile.id) {
				this.$refs.profileModal.show();
			}
			// return false;
		},
		showName(){
			return `${this.profile.fn} ${this.profile.mn} ${this.profile.ln}`;
		},
		showJoinedDate(){
			return moment(this.user.createdAt).format('YYYY-MM-DD');
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

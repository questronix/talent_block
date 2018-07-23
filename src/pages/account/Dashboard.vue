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

		<!-- Modal Component -->
		<b-modal id="profileModal" 
						ok-only
						:no-close-on-esc="true"
						:hide-header-close="true"
						:header-bg-variant="headerBgVariant"
						:header-text-variant="headerTextVariant"
						ok-title="Save"
						ref="profileModal"
						title="Update Profile" 
						@hidden="onHide"
						@ok="handleSubmit">
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
					v-model="profile.address" rows="5"></b-form-textarea>
					</b-form-group>
			</form>
		</b-modal>

		<!--  EDUCCATIONAL BACKGROUND -->
		<b-modal id="educModal" ok-only
						ref="educModal"
						title="Educational Background" @ok="educSubmit">
			<form @submit.stop.prevent="educSubmit">
					<b-form-group
						label="Enter School name:"
						label-for="name">
						<b-form-input 
						id="name"
						type="text"
						placeholder="School Name"
						v-model="educ.name"></b-form-input>
					</b-form-group>

					<b-form-group
												label="Degree"
												label-for="degree">
						<b-form-select id="degree"
													:options="{ 'Undergraduate': 'Undergraduate', 'Masteral': 'Masteral', 'Graduate': 'Graduate', 'Doctoral':'Doctoral', 'Vocational':'Vocational'}"
													v-model="educ.type">
						</b-form-select>
					</b-form-group>

					<b-form-group
						label="Enter your course:"
						label-for="course"
					>
					<b-form-input type="text"
					id="course"
					placeholder="Course"
					v-model="educ.course"></b-form-input>
					</b-form-group>

					<b-form inline>
						<label class="mr-sm-2" for="start_year">School Years</label>
						<b-form-select class="mb-3"
													:options="years"
													v-model="educ.start_year"
													id="start_year">
								<template slot="first">
									<option :value="null" disabled>Select Start Year</option>
								</template>
						</b-form-select> - &nbsp;
						<b-form-select class="mb-3"
													:options="years"
													v-model="educ.end_year"
													id="end_year">
								<template slot="first">
									<option :value="null" disabled>Select End Year</option>
								</template>
						</b-form-select>
					</b-form>

					<b-form-group
						label="GPA (Optional)"
						label-for="gpa"
					>
					<b-form-input type="number"
					id="gpa"
					placeholder="Grade"
					v-model="educ.gpa"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter school address:"
						label-for="address"
					>
					<b-form-textarea type="text" rows="5"
					id="address"
					v-model="educ.address"></b-form-textarea>
					</b-form-group>
			</form>
		</b-modal>

		<!--  OCCUPATIONAL BACKGROUND -->
		<b-modal id="occupationModal" ok-only
						ref="occupationModal"
						title="Educational Background" @ok="occupationSubmit">
			<form @submit.stop.prevent="occupationSubmit">
					<b-form-group
						label="Enter your Occupation Name:"
						label-for="name">
						<b-form-input 
						id="occupation"
						type="text"
						placeholder="Occupation"
						v-model="occupation.name"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter your Position:"
						label-for="name">
						<b-form-input 
						id="position"
						type="text"
						placeholder="Position / Job Title"
						v-model="occupation.position"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter your Department:"
						label-for="name">
						<b-form-input 
						id="department"
						type="text"
						placeholder="Department"
						v-model="occupation.department"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter your address:"
						label-for="address"
					>
					<b-form-textarea type="text" rows="5"
					id="address"
					v-model="occupation.address"></b-form-textarea>
					</b-form-group>

					<b-form-group
						label="Enter your Salary (Optional):"
						label-for="salary">
						<b-form-input 
						id="name"
						type="number"
						placeholder="Salary"
						v-model="occupation.salary"></b-form-input>
					</b-form-group>

					<b-form-group
						label="What are your duties?"
						label-for="duties"
					>
					<b-form-textarea type="text"
					id="duties"
					v-model="occupation.duties"></b-form-textarea>
					</b-form-group>

					<b-form-group
						label="Enter your reason why you leave:"
						label-for="reason"
					>
					<b-form-textarea type="text" rows="5"
					id="reason"
					v-model="occupation.reason"></b-form-textarea>
					</b-form-group>
					
			</form>
		</b-modal>

		<!--  VALID ID BACKGROUND -->
		<b-modal id="validIdModal" ok-only
						ref="validIdModal"
						title="Valid ID" @ok="validIdSubmit">
			<form @submit.stop.prevent="validIdSubmit">
					<b-form-group
						label="ID Name:"
						label-for="idName">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Valid ID"
						v-model="validIds.name"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Number:"
						label-for="number"
					>
					<b-form-input type="text"
					id="number"
					placeholder="Number"
					v-model="validIds.number"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

			<!--  FAMILY BACKGROUND -->
		<b-modal id="familyModal" ok-only
						ref="familyModal"
						title="Valid ID" @ok="familySubmit">
			<form @submit.stop.prevent="familySubmit">
					<b-form-group
						label="First Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.fn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Last Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Last Name"
						v-model="family.ln"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Middle Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.mn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Contact No:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Contact number"
						v-model="family.contact"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Occupation:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.occupation"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

				

				<div class="col scheds">
					<div class="sched-calendar padded-white stud-bg">
						<div class="bg-student">
							<h4>Educational Background</h4><b-btn v-b-modal.educModal>ADD</b-btn>
							<hr>
							<p v-show="profile.educ.length == 0">Add educational background</p>
							<edu-bg-list :educations="profile.educ" @updateList="updateEducationalBackgroundList"></edu-bg-list>
						</div>
						<div class="bg-student">
							<h4>Occupation Background</h4><b-btn v-b-modal.occupationModal>ADD</b-btn>
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
							<h4>IDs</h4><b-btn v-b-modal.validIdModal>ADD</b-btn>
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
							<h4>Family Background</h4><b-btn v-b-modal.familyModal>ADD</b-btn>
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
import EduBgList from '../../components/EducationalBackground/EduBgList.vue';
import moment from 'moment';
import axios from 'axios';


let base_year = 1974;
let years = Array.from({length: (moment().get('year') - base_year)}, (v, k) => {
	return {
		value: k+base_year + 1,
		text: k+base_year + 1	
	};
});

export default {
	name: 'dashboard',
	data() {
		return {
			years: years,
			user: this.$store.state.user || {},
			educ: {
				name: '',
				start_year: null,
				end_year: null,
				gpa: null,
				course: '',
				type: '',
				address: ''
			},
			occupation: {
				name: '',
				position: '',
				department: '',
				address: '',
				salary: '',
				duties: '',
				start_date: null,
				end_date: null,
				reason: '',
			},
			validIds: {
				name: '',
				number: '',
				type: '',
			},
			profile: {
				fn: '',
				ln: '',
				address: '',
				mn: '',
				contact_no: '',
				educ: [],
				ids: [],
				fam: []
			},
			family: {
				fn: '',
				ln: '',
				mn: '',
				contact: '',
				occupation: '',
			},
			needsUpdate: false,
			alert: {
				profile: 'You need to update your profile before you can enter to dashboard.'
			},
			headerBgVariant: 'primary',
			headerTextVariant: 'light'
		};
	},
  components: {

    BaseLayout,
		NavBar,
		AccountStats,
		EduBgList,
	},
	methods: {
		showEducYears: function(start_date, end_date){
			return `${moment(start_date).format('YYYY')} - ${moment(end_date).format('YYYY')}`;
		},
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
						this.needsUpdate = true;
						this.$refs.profileModal.show();
					}
				});																															 
		},
		onHide() {
			if (this.needsUpdate) {
				this.$root.$emit('bv::show::modal','profileModal');
			}																																																																														
		},
		getEducationalBackground(){
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
		updateEducationalBackgroundList(index) {
			this.profile.educ.splice(index, 1);
		},
		educSubmit() {
			axios.post(`/students/education`, this.educ).then(data=>{
				this.profile.educ.push({
					id: data.data.insertId,
					user_id: this.profile.user_id,
					...this.educ
				})
			}).catch(error=>{
				console.log(error);
				// alert(JSON.stringify(error));
			});
		},
		occupationSubmit() {
			alert(JSON.stringify(this.occupation));
		},
		validIdSubmit() {
			alert(JSON.stringify(this.validIds));
		},
		familySubmit() {
			alert(JSON.stringify(this.family));
		},
		handleSubmit() {
			if(this.profile.user_id){
				let body = {
					fn : this.profile.fn,
					ln : this.profile.ln,
					mn : this.profile.mn,
					contact_no : this.profile.contact_no,
					address : this.profile.address
				}
				axios.put('/students', body)
				.then((response) => {
					console.log(response);
					this.needsUpdate = false;
					this.$toasted.success("Profile updated.");
				}).catch((err) => {
					console.log(err);																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															
					this.$toasted.error("Something went wrong. Please try again or reload the page.");
					this.$root.$emit('bv::show::modal','profileModal');
				});
			}else{
				this.profile.user_id = this.user.id;
				axios.post('/students', this.profile)
				let body = {
					fn : this.profile.fn,
					ln : this.profile.ln,
					mn : this.profile.mn,
					contact_no : this.profile.contact_no,
					address : this.profile.address
				}
				axios.post('/students', body)
				.then((response) => {
					this.checkProfile();
					this.needsUpdate = false;
					this.$toasted.success("Profile updated.");
				}).catch((err) => {
					console.log(err);
					this.$toasted.error("Something went wrong. Please try again or reload the page.");
					this.$root.$emit('bv::show::modal','profileModal');
				});
			}
		}
	},
	mounted() {
		this.checkProfile();
	},
	computed: {
		showName(){
			return `${this.profile.fn} ${this.profile.mn} ${this.profile.ln}`;
		},
		showJoinedDate(){
			return moment(this.user.createdAt).format('YYYY-MM-DD');
		},
	},
	created() {
		this.$toasted.show(`Hi ${this.user.username}, Welcome back!`);
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

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
						<p><span class="fa-width"><font-awesome-icon icon="user" /></span> {{showName}}</p>
						<p><span class="fa-width"><font-awesome-icon icon="envelope" /></span> {{user.email}}</p> 
						<p><span class="fa-width"><font-awesome-icon icon="mobile-alt" /></span> {{ profile.contact_no }}</p>
						<p><span class="fa-width"><font-awesome-icon icon="map-marker-alt" /></span> {{profile.address}}</p> 
						<p><span class="fa-width"><font-awesome-icon icon="calendar-alt" /></span> Joined since <span>{{ showJoinedDate }}</span></p>
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
						label="Enter your Employer Name:"
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

					<label class="mr-sm-2" for="start_year">Date Started</label>
						<b-form-select class="mb-3"
													:options="{ 1 : 'January', 2 : 'February', 3 : 'March', 4 : 'April', 5 : 'May', 6 : 'June', 7 : 'July', 8 : 'August', 9 : 'September', 10 : 'October', 11 : 'November', 12 : 'December'}"
													v-model="occupation.start_month"
													id="start_year">
								<template slot="first">
									<option :value="null" disabled>Select Month</option>
								</template>
						</b-form-select>
						<b-form-select class="mb-3"
													:options="years"
													v-model="occupation.start_year"
													id="end_year">
								<template slot="first">
									<option :value="null" disabled>Select Year</option>
								</template>
						</b-form-select>

						<label class="mr-sm-2" for="start_year">Date Ended </label>
						<b-form-checkbox id="isPresent"
                     v-model="isPresentOccupation"
                     checked>
							I'm currently working here
						</b-form-checkbox>
						<b-form-select class="mb-3" v-show="!isPresentOccupation"
													:options="{ 1 : 'Janauary', 2 : 'Febrauary', 3 : 'March', 4 : 'April', 5 : 'May', 6 : 'June', 7 : 'July', 8 : 'August', 9 : 'September', 10 : 'October', 11 : 'November', 12 : 'December'}"
													v-model="occupation.end_month"
													id="start_year">
								<template slot="first">
									<option :value="null" disabled>Select Month</option>
								</template>
						</b-form-select>
						<b-form-select class="mb-3" v-show="!isPresentOccupation"
													:options="years"
													v-model="occupation.end_year"
													id="end_year">
								<template slot="first">
									<option :value="null" disabled>Select Year</option>
								</template>
						</b-form-select>

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
						label="Enter address:"
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
					<b-form-textarea type="text" rows="5"
					id="duties"
					v-model="occupation.duties"></b-form-textarea>
					</b-form-group>

					<b-form-group v-show="!isPresentOccupation"
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
						v-model="ids.name"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Number:"
						label-for="number"
					>
					<b-form-input type="text"
					id="number"
					placeholder="Number"
					v-model="ids.number"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

			<!--  FAMILY BACKGROUND -->
		<b-modal id="familyModal" ok-only
						ref="familyModal"
						title="Valid ID" @ok="familySubmit">
			<form @submit.stop.prevent="familySubmit">
						<b-form-group
												label="Relationship"
												label-for="type">
						<b-form-select id="type"
													:options="{ 'Father': 'Father', 'Mother' : 'Mother', 'Sister': 'Sister', 'Brother': 'Brother', 'Wife': 'Wife', 'Husband': 'Husband', 'Dependents': 'Dependents'}"
													v-model="family.type">
						</b-form-select>
					</b-form-group>
					<b-form-group
						label="First Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="First Name"
						v-model="family.fn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Last Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Last Name"
						v-model="family.ln"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Middle Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Middle Name"
						v-model="family.mn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Contact No:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Contact number"
						v-model="family.contact_no"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Occupation:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Occupation"
						v-model="family.occupation"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>
			


				<div class="col scheds">
					<div class="sched-calendar padded-white stud-bg">
						<Timeline />
						<div class="bg-student">
							<h4>Educational Background</h4><b-btn v-b-modal.educModal class="addbtns btn-success"><font-awesome-icon icon="plus-circle" /></b-btn>
							<hr>
							<p v-show="profile.educ.length == 0">Add educational background now</p>
							<edu-bg-list :educations="profile.educ" @updateList="updateEducationalBackgroundList"></edu-bg-list>
						</div>
						<div class="bg-student">
							<h4>Occupation Background</h4><b-btn v-b-modal.occupationModal class="addbtns btn-success"><font-awesome-icon icon="plus-circle" /></b-btn>
							<hr>
							<div class="stud-bg-content">
								<b-row>
									
									</b-row>
								<b-row class="stud-bg-row">
									<p v-show="profile.occupations.length == 0">Add occupational background now</p>
									<occu-bg-list :occupations="profile.occupations" @updateList="updateOccupationBackgroundList"></occu-bg-list>
								</b-row>
							</div>
						</div>
						<div class="bg-student">
							<h4>IDs</h4><b-btn v-b-modal.validIdModal class="addbtns btn-success"><font-awesome-icon icon="plus-circle" /></b-btn>
							<hr>
							<div class="stud-bg-content">
								<b-row>

								</b-row>
								<b-row class="stud-bg-row">
									<p v-show="profile.ids.length == 0">Add valid IDs now</p>
									<id-bg-list :ids="profile.ids" @updateList="updateIdBackgroundList"></id-bg-list>
								</b-row>
							</div>
						</div>
						<div class="bg-student">
							<h4>Family Background</h4><b-btn v-b-modal.familyModal class="addbtns btn-success"><font-awesome-icon icon="plus-circle" /></b-btn>
							<hr>
							<div class="stud-bg-content">
								<b-row>
								
								</b-row>
								<b-row class="stud-bg-row">
									<p v-show="profile.fam.length == 0">Add family background now</p>
									<fam-bg-list :families="profile.fam" @updateList="updateFamilyBackgroundList"></fam-bg-list>
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
import FamBgList from '../../components/FamilyBackground/FamBgList.vue';
import OccuBgList from '../../components/OccupationalBackground/OccuBgList.vue';
import IdBgList from '../../components/IDsBackground/IdBgList.vue';
import Timeline from '../../components/Schedule/Timeline.vue';
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
			events: [],
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
				salary: 0,
				duties: '',
				start_year: null,
				end_year: -1,
				start_month: null,
				end_month: -1,
				reason: '',
			},
			isPresentOccupation: false,
			ids: {
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
				fam: [],
				occupations: [],
			},
			family: {
				fn: '',
				ln: '',
				mn: '',
				contact_no: '',
				occupation: '',
				type: '',
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
		FamBgList,
		OccuBgList,
		IdBgList,
		Timeline
	},
	methods: {
		eventAdded(event) {
				this.events.push(event);
		},
		eventDeleted(event) {
				this.events.splice(this.events.indexOf(event), 1);
		},
		showEducYears: function(start_date, end_date){
			return `${moment(start_date).format('YYYY')} - ${moment(end_date).format('YYYY')}`;
		},
		checkProfile() {
			//by default user have session in the server
			axios.get(`/students/me`)
				.then((response) => {
					//if there is no record
					this.profile = Object.assign({}, this.profile, response.data);
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
		updateEducationalBackgroundList(index) {
			this.profile.educ.splice(index, 1);
		},
		educSubmit() {
			axios.post(`/students/education`, this.educ).then(data=>{
				this.profile.educ.push({
					id: data.data.insertId,
					user_id: this.profile.user_id,
					...this.educ
				});
				this.$toasted.success('Educational background was succesfully updated');
				this.educ = {};
			}).catch(error=>{
				console.log(error);
				// alert(JSON.stringify(error));
			});
		},
		updateFamilyBackgroundList(index) {
			this.profile.fam.splice(index, 1);
		},
		familySubmit() {
			axios.post(`/students/family`, this.family).then(data=>{
				console.log(data);
				console.log(this.profile.fam);
				this.profile.fam.push({
					id: data.data.insertId,
					user_id: this.profile.user_id,
					...this.family
				});
				this.$toasted.success('Family background was succesfully updated');
				this.family = {};
			}).catch(error=>{
				console.log(error);
			});
		},
		updateOccupationBackgroundList(index) {
			this.profile.occupations.splice(index, 1);
		},
		occupationSubmit() {
			if (this.isPresentOccupation) {
				this.occupation.end_month = -1;
				this.occupation.end_year = -1;
			}
			axios.post(`/students/occupation`, this.occupation).then(data=>{
				console.log(data);
				console.log(this.profile.occupations);
				this.profile.occupations.push({
					id: data.data.insertId,
					user_id: this.profile.user_id,
					...this.occupation
				});
				this.$toasted.success('Occupational background was succesfully updated');
				this.occupation = {};
				this.isPresentOccupation = false;
			}).catch(error=>{
				console.log(error);
			});
		},
		updateIdBackgroundList(index) {
			this.profile.ids.splice(index, 1);
		},
		validIdSubmit() {
			axios.post(`/students/ids`, this.ids).then(data=>{
				console.log(data);
				console.log(this.profile.ids);
				this.profile.ids.push({
					id: data.data.insertId,
					user_id: this.profile.user_id,
					...this.ids
				});
				this.$toasted.success('Occupational background was succesfully updated');
				this.ids = {};
			}).catch(error=>{
				console.log(error);
			});
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

.addbtns {
	float: right;
}

.fa-width {
	width: 25px;
}
</style>

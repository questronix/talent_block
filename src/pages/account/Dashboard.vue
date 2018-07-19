<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Dashboard" img="url('/static/img/bg2.png')"/>
    </div>
		
    <div slot="space"></div>
    <div slot="body">
	<AccountStats />
	<div class="dashboard accountforms">
		<b-container>

			<b-row>
				<b-col cols="3" class="dash-account-basic">
					<router-link class="btn-acnt-sttngs" :to="{ name: 'settings' }">Account Settings</router-link>
					<!-- <a class="btn">Account Settings</a> -->
					<div class="dab-info">
						
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
import DashboardCotent from '../../components/Dashboard/DashboardContent.vue';
import Modal from '../../components/Student/StudentInfoModal.vue';

export default {
  name: 'dashboard',
  components: {
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

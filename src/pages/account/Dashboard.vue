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
						
						<p>jaytacdoro@gmail.com</p>
						<p>617 Purok 6 Brgy. Nueva, San Pedro Laguna</p>
						<p>Joined since <span>March 2, 2016</span></p>
						<p>+64-9xx-xxxx-xxx</p>
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

export default {
  name: 'dashboard',
  components: {
    BaseLayout,
		NavBar,
		AccountStats,
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

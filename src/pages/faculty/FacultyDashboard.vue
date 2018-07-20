<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Faculty" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
	<AccountStats />
	<div class="dashboard accountforms">
		<b-container>

			<b-row>
				<b-col cols="3" class="dash-account-basic">
					
					<div class="dab-info">
						
						<p>faculty123@gmail.com</p>
						<p>Faculty Village, Los Banos, Laguna</p>
						<p>Joined since <span>February 24, 2015</span></p>
						<p>+64-912-3456-789</p>
					</div>
				</b-col>

				<div class="col scheds">
					
					<div class="completed-sub">
						<h4 class="h4-centered">Information</h4>
						<div class="padded-white">
							<div class="completed-sub-detail">
								<h4>MSc Computer Science</h4>
								<b-row>
									<b-col>
										<p>Polytechnic University of the Philippines</p>
									</b-col>
									<b-col>
										<p>Major: Data Science</p>
									</b-col>
									<b-col>
										<p>Graduated: May 1,2015</p>
									</b-col>
								</b-row>
							</div>

							<div class="completed-sub-detail">
								<h4>BS Computer Science</h4>
								<b-row>
									<b-col>
										<p>Polytechnic University of the Philippines</p>
									</b-col>
									<b-col>
										<p>Major: Computer Architecture</p>
									</b-col>
									<b-col>
										<p>Graduated: May 30,2010</p>
									</b-col>
								</b-row>
							</div>
							<div class="completed-sub-detail">
								<h4>Faculty Room:H21</h4>
								<b-row>
									<b-col>
										<p>at Institute of Computer Science</p>
									</b-col>
									<b-col>
										<p>Cubicle: 36D</p>
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
import AccountStats from '../../components/AccountStats/AccountStatsFaculty.vue';

export default {
  name: 'faculty_dashboard',
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

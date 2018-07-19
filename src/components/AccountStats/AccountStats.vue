<template>
    <div class="accountstats">
		<!-- PROFILE PICTURE -->
		<div class="profile-pic">
			<img src="/static/img/photo1.png" class="rounded-circle">
		</div>

		<!-- PROFILE NAME -->
		<div class="profile-name">
			<h3>{{ fn }} {{ ln }}</h3>
		</div>

      <div class="profile-stats">
			<b-container>
				<b-row>
					<b-col>
						<span>Certificates</span>
						<h3>13</h3>
					</b-col>
					<b-col>
						<span>Lecture Finished</span>
						<h3>23</h3>
					</b-col>
					<b-col>
						<span>Enrolled Course</span>
						<h3>17</h3>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AccountStats',
	props: {
		fn: String,
		ln: String,
	}
}
</script>

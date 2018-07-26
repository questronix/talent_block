<template>
    <div class="accountstats">
		<!-- PROFILE PICTURE -->
		<div class="profile-pic">
			<img src="/static/img/photo1.png" class="rounded-circle">
		</div>

		<!-- PROFILE NAME -->
		<div class="profile-name">
			<h3>{{ fn }} {{ ln }}</h3>
			 <h3></h3> <!-- student name -->
		</div>

      <div class="profile-stats">
			<b-container>
				<b-row>
					<b-col>
						<span></span> <!-- Certificates -->
						<h3></h3> <!-- number -->
					</b-col>
					<b-col>
						<span></span> <!-- lecture Finished -->
						<h3></h3> <!-- number -->
					</b-col>
					<b-col>
						<span>Coins left</span> <!-- Enrolled Course -->
						<h3>{{ coins }}</h3> <!-- number -->
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
		coins: String,
	}
}
</script>

<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Account Settings" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
	<AccountStats />
	<div class="dashboard accountforms">
		<b-container>
			<b-row>
				<b-col cols="3" class="basic-info">
					<h5>Basic Information</h5>
					<form>
						Email
						<br>
						<input class="form-control" type="email" name="" placeholder="name@email.com">
						<br>
						Confirm Email
						<br>
						<input class="form-control" type="email" name="" placeholder="name@email.com">
						<br>
						Birthday
						<br>
						<input class="form-control" type="date" name="" placeholder="December 31, 1996">
						<br>
						Password
						<br>
						<input class="form-control" type="password" name="" placeholder="Password">
						<br>
						Confirm Password
						<br>
						<input class="form-control" type="password" name="" placeholder="Password">
						<br>
						Address
						<br>
						<input class="form-control" type="text" name="" placeholder="San Pedro Laguna">
						<br>
						Contact Number
						<br>
						<input class="form-control" type="text" name="" placeholder="+63-9xx-xxxx-xxx">
						<br>
						<input class="btn btn-primary" type="submit" name="" value="Update">
					</form>
				</b-col>

				<div class="col card-info">
					<div class="container">
						<center>
							<h5>Card Information</h5>
							<button class="btn addcard">Add Card</button>
						</center>
						
						<div class="row">

							<div class="col">
								
								<br>
								<div>
									<p>Card Type: Master Card</p>
									<p>Name: Jay Tacdoro</p>
									<p>Card Number: 5321-xxxxxx-xxxx</p>
								</div>
							</div>
							<div class="col-3">
								
								<br>
								<p>Expiration Date: 12/2020</p>
								<p>CVV: 260</p>
								<button class="btn btn-primary editbtn">Edit</button>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col">
								
								<div>
									<p>Card Type: Master Card</p>
									<p>Name: Jay Tacdoro</p>
									<p>Card Number: 5321-xxxxxx-xxxx</p>
								</div>
							</div>
							<div class="col-3">
								
								<p>Expiration Date: 12/2020</p>
								<p>CVV: 260</p>
								<button class="btn btn-primary editbtn">Edit</button>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col">
							
								<div>
									<p>Card Type: Master Card</p>
									<p>Name: Jay Tacdoro</p>
									<p>Card Number: 5321-xxxxxx-xxxx</p>
								</div>
							</div>
							<div class="col-3">
							
								<p>Expiration Date: 12/2020</p>
								<p>CVV: 260</p>
								<button class="btn btn-primary editbtn">Edit</button>
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
  name: 'settings',
  components: {
    BaseLayout,
		NavBar,
		AccountStats,
  }
}
</script>

<style scoped>
button.btn.btn-primary.editbtn {
	float: right;
	width: 100px;
}
</style>

<template>
  <base-layout>
    <div slot="header">
      <NavBar type="dashboard" heading="Dashboard" img="url('/static/img/bg2.png')"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
	<AccountStats />
	<div class="dashboard accountforms">
		<div class="container">
			<div class="padded-white">
				<div class="completed-sub-detail" v-for="transaction in transactions" :key="transaction.id">
					<h5>{{transaction.name}}</h5>
                    <hr>
					<div class="row">
						<div class="col">
							<p>Subject Code: {{transaction.subjectcode}}</p>
							<p>Ref number: {{transaction.refnum}}</p>
						</div>
						<div class="col">
							<p>School: {{transaction.school}}</p>
							<p>Amount: <span>{{transaction.ammount}}</span></p>
						</div>
						<div class="col">
							<div class="btn-group">
							  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Option
							  </button>
							  <div class="dropdown-menu cat-dropdown">
							  	<div class="btn-group">
					
							    <div class=""></div>
							  </div>
							</div>
							</div>
						</div>
					</div>
				</div>

			</div>	
		</div>

		
	</div>
	</div>
  </base-layout>
</template>

<script>
import BaseLayout from '../../layouts/BaseLayout.vue';
import NavBar from '../../components/NavBar/NavBar.vue';
import AccountStats from '../../components/AccountStats/AccountStats.vue';

export default {
  name: 'transactionlog',
  components: {
    BaseLayout,
	NavBar,
	AccountStats,
  },
  data() {
    return {
        transactions:
        [
            {
                id: 1, name: 'Fundamental of UX/UI Design', subjectcode: 'FUX2016', refnum: '111231232', school: 'Ateneo De Manila University', ammount: '23,599'
            },
            {
                id: 2, name: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript', subjectcode: 'FGF2016', refnum: '12362232', school: 'Ateneo De Manila University', ammount: '33,000'
            },
            {
                id: 3, name: 'Introduction to Meteor.js Development', subjectcode: 'IMD2016', refnum: '120482042', school: 'Ateneo De Manila University', ammount: '13,099'
            },
            {
                id: 4, name: 'Web Application Development with JavaScript and MongoDB', subjectcode: 'MDB2018', refnum: '10275832', school: 'Ateneo De Manila University', ammount: '17,599'
            }
            ,{
                id: 5, name: 'Responsive Website Tutorial and Examples', subjectcode: 'EXB2018', refnum: '193629372', school: 'Ateneo De Manila University', ammount: '19,599'
            }
        ]
    };
      
  }
}
</script>

<style scoped>
.btn-group {
    float: right;
}

.row{
    padding: 20px;
}

p {
    color: gray;
}
</style>

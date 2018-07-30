import axios from 'axios';
export default {
  
	methods: {
		getSched: function() {

				axios.get('/courses/' + this.$route.query.id + '/schedule')
				.then((response) => {
						return this.schedule = response.data.data
				}).catch((err)=> {
						console.log('Schedule error', err)
				});
		},
	},
	beforeMount(){
		this.getSched()
	}
}
   
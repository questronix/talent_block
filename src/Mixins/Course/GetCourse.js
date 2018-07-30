import axios from 'axios';
export default {
  
    methods: {
        getCourse: function() {
            axios.get('/courses/' + this.$route.query.id)
            .then((response) => {
              return this.courses = response.data.course[0];
              console.log(this.courses)
            }).catch((err) => {
              console.log('Course error ', err)
            });
        },
    },
    beforeMount(){
        this.getCourse()
    }
    
}
   
<template>
  <base-layout>
    <div slot="body">  
      <div class="login">
        <b-col cols="4" offset-md="4">
        <div class="success-card">
          <img src="/static/img/temporary_success.png">
          <h5 class="text-center">Great! You have successfully signed up!</h5>
          <h6>We've sent you a link to confirm your email address.</h6>
          <h6>Please check your inbox.</h6>
          
        </div>
      </b-col>
      </div>
    </div>
  </base-layout>
</template>

<script>  

import BaseLayout from '../layouts/BaseLayout.vue';


export default {
  name: 'success',  
  components: {
    BaseLayout,
  }
}
</script>


<style scoped>
body {
  overflow: hidden;
}

.success-card {
  background-color: ##446ACB;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,.125);
  margin: 40px;
  color:white;
}

#btnGoogle {
  color: black;
  background-color: #dcdcdc;
  border-style: none;
}

#username, #password {
  border-radius: 20px;
}
</style>


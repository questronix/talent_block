<template>
  <base-layout>
    <div slot="body">  
      <div class="login">
        <div class="card text-center" style="width: 40rem;">
          <div class="card-body">
            <img class="mail" src="/static/img/success.png">
            <br/>
            
            <h5 class="card-title"><strong>Great! You've successfully signed up.</strong></h5>
            <p class="card-text" id="text-details">We've sent you a link to confirm your email address.
            <p class="continuation" id="text-details">Please check your inbox.</p>
            <br/>
            <p><strong>Didn't receive the email?</strong></p>
            <a href="#" class="btn btn-outline-light">Resend Email Confirmation</a>
          </div>
        </div>
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


#btnGoogle {
  color: black;
  background-color: #dcdcdc;
  border-style: none;
}

#username, #password {
  border-radius: 20px;
}

.mail{
  width: 30%;
  height:auto;
  margin-bottom:20px;
}
.login .card{
  margin-left:25%;
  margin-top:4%;
  background-color: #446ACB;
  color:white;
  border:none;
}
.continuation{
  margin-top:-20px;
}

#text-details{
  color:lightgrey;
}

</style>


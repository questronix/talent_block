<template>
  <base-layout>
    <div slot="body">  
      <div class="login">
        <div class="card text-center" style="width: 40rem;">
          <div class="card-body">
            <br/>
                <h2> Change Your Password</h2>
            <br/>
            <b-form @submit.prevent="onSubmit">

                <b-form-group> 
                  <b-form-input 
                    id="ch-reg-password" 
                    type="password" 
                    v-model="password" 
                    placeholder="New Password"
                    required>
                  </b-form-input>
                </b-form-group>

                <b-container>
                  
                  <div id="ch-pass-str-msg"/>
                  <div id="ch-pass-str"/>
                 </b-container>
                <b-container id="ch-pass-str-miss-msg"/>
               

                <b-form-group>
                  <b-form-input 
                    id="ch-conpassword" 
                    type="password" 
                    v-model="conpassword" 
                    placeholder="Confirm Password"
                    required>
                  </b-form-input>
                </b-form-group>

                <b-container>
                  <div id="ch-str-msg-conpass" />
                </b-container>

                <b-button type="submit" variant="primary" :block="true" :disabled="isLoading">
                    CHANGE PASSWORD
                </b-button>
              </b-form>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>  

import BaseLayout from '../layouts/BaseLayout.vue';


export default {
  name: 'changepassword',  
  components: {
    BaseLayout,
  },
  data(){
      return{
          password: '',
          conpassword: '',
          missing: missing,
          strength: strength
      }
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
  background-color: white;
  color:black;
  border:none;
}
.continuation{
  margin-top:-20px;
}

#text-details{
  color:lightgrey;
}

</style>


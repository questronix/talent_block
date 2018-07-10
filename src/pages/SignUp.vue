<template>
  <base-layout>
    <div slot="body">
      
      <div class="signuppage">
        <div class="signupcontainer">
          <div class="signupform">
            <div class="singupcontent">
              <span class="signup-span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Suspendisse id venenatis nibh, a porttitor libero.
              </span>
              <br>
              <img src="/static/img/signupimg.svg" height="200px">
            </div>
            <div class="formsignup">
            
            <h4>Sign Up</h4>
              <form >
                <input class="form-control" type="text" name="username" placeholder="Username">
                <br>
                <input class="form-control" type="email" name="email" placeholder="Email">
                <br>
                <input class="form-control" type="text" name="mobileno" placeholder="Mobile No.">
                <br>
                <input class="form-control" type="password" name="password" placeholder="Password">
                <br>
                <div class="capcha">Capcha here</div>
                <br>
                <button class="btn primary signupbtn">Sign up</button>
                <p>By signing up, you agree to our <a href="">Terms of Use</a> and <a href="">Privacy Policy.</a></p>
              </form>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      </div>

    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'signUpPage',
  components: {
    BaseLayout,
  }
}
</script>


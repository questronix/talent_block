<template>
  <base-layout>
    <div slot="header">
      <NavBar type="homepage" heading="Knowledge is power. Expand your knowledge." link-caption="Get started for free"/>
    </div>
    <div slot="space"></div>
    <div slot="body">
      <div class="features">
        <div class="feat-details container">
          <div class="row">
            <div class="col feat-detail">
              <img src="static/img/graduate.svg" height="100">
              <div class="feature">
                 <h4>Globally competitive courses</h4>
                <p>Choose the courses that will surely help you in your professional life.</p>
              </div>
            </div>
            
            <div class="col feat-detail">
              <img src="static/img/payment.png" height="100">
              <div class="feature">
                <h4>Keep what you pay for</h4>
                <p>Guaranteed easy and reliable transactions with every course you wish to take.</p>
              </div>
            </div>
            <div class="col feat-detail">
              <img src="static/img/teacher.png" height="100">
              <div class="feature">
                <h4>Licensed professionals</h4>
                <p>Learn from equipped and experienced teachers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="courselist">
        <div class="courses">
          <h3>Check our courses</h3>
          <ul>
            <li v-for="c in courses.slice(0,12)" :key="c.id">
              <img :src="c.thumbnail"><br>
              <!-- TODO: change c.slot to num of students enrolled to this course -->
              <p>+ {{ c.slot }} students</p>
              <router-link :to="{ path: 'courses/course?id=' + c.id }">
                <h5>{{ c.name}}</h5>
              </router-link>
              <p>{{c.short_desc}}</p>
            </li>   
          </ul>
        </div>
      </div>

      <div class="trainingoffertype">
        <div class="container">
          <h4>Type of training we offer</h4>
          <div class="row trainings">
            <div class="col-lg-4">
              <img src="/static/img/eye.svg">
              <h4>Virtual</h4>
              <p>Take courses in any of your devices. Have more control with your time.</p>
            </div>
            <div class="col-lg-4">
              <img src="/static/img/classroom.svg">
              <h4>Classroom</h4>
              <p> Traditional learning type with peers of your same interest.</p>
            </div>
            <div class="col-lg-4">
              <img src="/static/img/talking.svg">
              <h4>One-on-one</h4>
              <p>Engage in a more flexible and focused discussion.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="amazing container">
        <h4>Become something amazing</h4>
        <div class="row">
          <div class="col-lg-8 besomething">
            <div class="container besmthing">
              <div class="row">
                <div class="col-lg-4 course backend">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                    Back-end Developer
                  </div>
                </div>
                <div class="col-lg-4 course projlead">
                <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                   Project Leader
                  </div>
                </div>
                <div class="col-lg-4 course ui-ux">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                   UI/UX Designer
                  </div>
                </div>
                <div class="col-lg-4 course proj-analyst">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                    Project Analyst
                  </div>
                </div>
                <div class="col-lg-4 course projmngr">
                <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                  Project Manager
                  </div>
                </div>
                <div class="col-lg-4 course webdev">
                <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                  Web Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col signupform">
            <h4>Contact Us</h4>
            <form>
              <input class="form-control" type="text" name="" placeholder="Name">
              <br>
              <input class="form-control" type="email" name="" placeholder="Email Address">
              <br>
              <textarea class="form-control" placeholder="Message"></textarea>
              <br>
              <center><button class="btn btn-primary">Submit</button></center>
            </form>
          </div>
        </div>
      </div>

    </div>
    
    <div slot="footer" class="footer">
      <div class="container">
        <div class="row">
          <div class="col socialmedia">
            <ul>
              <li>
                <img src="/static/img/facebook-logo.svg" height="20" width="20"> Facebook
              </li>
              <li>
                <img src="/static/img/twitter.svg" height="20" width="20"> Twitter
              </li>
              <li>
                <img src="/static/img/linkedin-logo.svg" height="20" width="20">  Linkedin
              </li>
              <li>
                <div class="footer-nav">
                  <ul>
                    <li>© All rights reserve 2018</li>
                    <li>About Us</li>
                    <li>Help</li>
                    <li>Privacy</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="col footer-title">
            <h2><img src="/static/img/logo-2.png" height="80" width="80"> Talent Block</h2>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';
import NavBar from '../components/NavBar/NavBar.vue';
import axios from 'axios';

export default {
  name: 'homePage',
  components: {
    BaseLayout,
    NavBar,
  },
  data() {
    return {
      courses: []
    }
  },
   methods:{
     getUnits: function() {
       axios.get('/courses')
        .then((response) => {
          this.courses = response.data.course
        }).catch((err) => {
          console.log('Home error', err);
        });
     }
  },
  beforeMount(){
    this.getUnits()
  },
  beforeCreate() {
    let url = this.$store.getters.getRedirectLink;
    if (url) {
      this.$store.commit('CLEAR_REDIRECT_URL');
      window.location.href = `#${url}`;
    }
  }
}
</script>

<style>
.col.feat-detail {
    display: flex;
    text-align: left;
}

.col.socialmedia img {
    margin-top: -7px;
    margin-right: 10px;
}

.courses h5 {
    color: gray;
}

.courses ul {
    padding: 0;
    text-align: center;
}

.col.footer-title {
    text-align: right;
}

.col.socialmedia {
  padding: 0;
}
</style>

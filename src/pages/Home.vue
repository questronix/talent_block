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
            <div class="col-4 feat-detail">
              <img src="static/img/graduate.svg" height="100">
              <div class="feature">
                <h4>100,995 Online courses</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="col-4 feat-detail">
              <img src="static/img/payment.png" height="100">
              <div class="feature">
                <h4>Keep what you pay for</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="col-4 feat-detail">
              <img src="static/img/teacher.png" height="100">
              <div class="feature">
                <h4>Personal tutors on standby</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="courselist">
        <div class="courses">
          <h3>Check our courses</h3>
          <ul>
            <li v-for="course in courses" :key="course.id">
              <img :src="course.imgUrl"><br>
              <p>+ {{ course.count }} students</p>
              <router-link :to="{ name: 'course' }">
                <h5>{{ course.title}}</h5>
              </router-link>
              <p>{{course.desc}}</p>
              
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="col-lg-4">
              <img src="/static/img/classroom.svg">
              <h4>Classroom</h4>
              <p>Cras faucibus gravida nisl, at pellentesque eros consequat quis.</p>
            </div>
            <div class="col-lg-4">
              <img src="/static/img/talking.svg">
              <h4>One-on-one</h4>
              <p>Phasellus rutrum odio dapibus molestie commodo. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="amazing container">
        <h4>Become something amazing</h4>
        <div class="row">
          <div class="col-8 besomething">
            <div class="container besmthing">
              <div class="row">
                <div class="col-4 course backend">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                    Back-end Developer
                  </div>
                </div>
                <div class="col-4 course projlead">
                <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                   Project Leader
                  </div>
                </div>
                <div class="col-4 course ui-ux">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                   UI/UX Designer
                  </div>
                </div>
                <div class="col-4 course proj-analyst">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                    Project Analyst
                  </div>
                </div>
                <div class="col-4 course projmngr">
                <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                  Project Manager
                  </div>
                </div>
                <div class="col-4 course webdev">
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

export default {
  name: 'homePage',
  components: {
    BaseLayout,
    NavBar,
  },
  data() {
      return {
        courses: [
          {
            id: 1, title: 'Neural Networks and Deep Learning', count: '23,512', desc: 'If you want to break into cutting-edge AI, this course will help you do so.', imgUrl: '/static/img/dummies/dummy1.jpg'
          },
          {
            id: 2, title: 'Mathematics for Machine Learning Specialization', count: '12,235', desc: 'For a lot of higher level courses in Machine Learning and Data Science, you find you need to freshen up on the basics in maths - stuff you may have studied before in school or university, but which was taught in another context, or not very intuitively, such that you struggle to relate it to how it’s used in Computer Science.', imgUrl: '/static/img/dummies/dummy3.jpg'
          },
          {
            id: 3, title: 'Business English: Making Presentations', count: '12,731', desc: 'This course teaches you language and techniques that will help you make effective presentations in English.', imgUrl: '/static/img/dummies/dummy2.jpg'
          },
          {
            id: 4, title: 'Cameras, Exposure, and Photography', count: '15,121', desc: 'Welcome to Course One of Photography Basics and Beyond: From Smartphone to DSLR!', imgUrl: '/static/img/dummies/dummy4.jpg'
          },
          {
            id: 5, title: 'Java Programming: Solving Problems with Software', count: '15,121', desc: 'Learn to code in Java and improve your programming and problem-solving skills.', imgUrl: '/static/img/dummies/dummy5.jpg'
          },
          {
            id: 6, title: 'Introduction to C# Programming and Unity', count: '13,512', desc: 'This course is all about starting to learn how to develop video games using the C# programming language and the Unity game engine on Windows or Mac.', imgUrl: '/static/img/dummies/dummy6.jpg'
          },
          {
            id: 7, title: 'Models & Frameworks to Support Sales Planning', count: '24,123', desc: 'The world of business strategy is in transition. What used to work doesn\'t anymore -- not necessarily.', imgUrl: '/static/img/dummies/dummy7.jpg'
          },
          {
            id: 8, title: 'How to Start Your Own Business Specialization', count: '12,465', desc: 'This specialization is a guide to creating your own business.', imgUrl: '/static/img/dummies/dummy8.jpg'
          },
          {
            id: 9, title: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript', count: '16,234', desc: ' Welcome to Course 3 - Models & Frameworks to Support Sales Planning – In this course, you’ll go through a conceptual approach to selling models and frameworks.', imgUrl: '/static/img/dummies/dummy9.jpg'
          },
          {
            id: 10, title: 'The Business of Social', count: '8,355', desc: 'In a 2014 study of CEOs and CMOs, IBM found 63% wanted social strategies which generate business metrics while only 20% of businesses worldwide actually have them.', imgUrl: '/static/img/dummies/dummy10.jpg'
          },
          {
            id: 11, title: 'Open Source tools for Data Science', count: '11,203', desc: 'In this course, you\'ll learn about Jupyter Notebooks, RStudio IDE, Apache Zeppelin and Data Science Experience.', imgUrl: '/static/img/dummies/dummy11.jpg'
          },
          {
            id: 12, title: 'Innovation for Entrepreneurs: From Idea to Marketplace', count: '9,341', desc: 'Develop insights on navigating the innovation process from idea generation to commercialization.', imgUrl: '/static/img/dummies/dummy12.jpg'
          }
        ]
      };
  }
}
</script>

<style>
.col.socialmedia img {
    margin-top: -7px;
    margin-right: 10px;
}

.courses h5 {
    color: gray;
}

.col.footer-title {
    text-align: right;
}
</style>

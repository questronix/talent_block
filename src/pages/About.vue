<template>
  <base-layout>
    <div slot="header">
      <NavBar class="page-about" type="dashboard" heading="About Talent Block" />
    </div>
    <div slot="space"></div>
    <div slot="body">
      
      <div class="courselist">
        <div class="courses" style="width:70%">
          <h3><strong>Build Future With Us</strong></h3>
          <span class="content">
          Talent Block is an online learning platform. 
          An avenue to take the world’s best courses to improve job-related skills.
          It is dedicated to gear up one’s competence through accessibility and
          affordability of vast subjects to pick from. 
          Step up your game to step up your name by signing up for free!
          </span>     

        </div>
      </div>

      <div class="about-cat">
          <div class="container">
            <div class="row top-cat-row">
              <div class="col" v-for="category in categories" :key="category.id">
                <div class="col-topcourse" :style="{ 'background-image': 'url(' + category.imgUrl + ')' }">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                      <h4>{{category.category}}</h4>
                      <p>{{category.available}} Courses available</p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
      <div class="top-cat">
        <h3>What people have to say</h3>
        <br/>
        <div class="comments">
          <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header " style="background-color:#4a74cc"><br/> <br/></div>
            <div class="card-body ">
              <p class="card-text" >
              Programming peeked my interest and I am planning to take Computer Science
              in college. Since, I don't have that much background, I took some programming courses virtually
              and I feel like I have the edge compared with my soon to be classmates.              
              </p>
            </div>
            <div class="card-footer bg-transparent ">
              <img class="profile1" src="/static/img/photo3.png"/>
              <span> <strong>Princess Mojica </strong></span>
            </div>
          </div>


          <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header " style="background-color:#4a74cc"><br/> <br/></div>
            <div class="card-body ">
              <p class="card-text" >
              I am really into designing but my degree program in my undergraduate school does not have such courses
              in my curriculum that's why I am really glad when I found out about Talent Block because it offers courses with different
              approaches such as virtual, classroom and one-on-one. 
              </p>
            </div>
            <div class="card-footer bg-transparent ">
              <img class="profile1" src="/static/img/photo2.png"/>
              <span> <strong>Daimler Matienzo </strong></span>
            </div>
          </div>


          <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header " style="background-color:#4a74cc"><br/> <br/></div>
            <div class="card-body ">
              <p class="card-text" > A new platform that caters my needs and there is vast range of 
              courses that I can pick from. I have already recommended Talent Block to my friends and they
               love it as much as I do. This really helps a lot of people to improve their skills and 
               learn a new one.
              </p> 
            </div>
            <div class="card-footer bg-transparent ">
              <img class="profile1" src="/static/img/photo4.png"/>
              <span> <strong>Paolo Panganiban </strong></span>
            </div>
          </div>

      </div>

      
        
      </div>
      <div class="before-footer">
          <img src="/static/img/guy-thinking.png">
          <div class="before-footer-content">
            <h3>Look around, it's free!</h3>
            <a href="/#/"><button type="button" class="btn btn-outline-light">Home</button></a>
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
                    <li>© All rights reserved 2018</li>
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
  name: 'aboutPage',
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
        ],
        categories: 
        [
          {id: 1, category: 'Backend developer', available: '3,215', imgUrl: '/static/img/backend.png'},
          {id: 2, category: 'Business', available: '6,285', imgUrl: '/static/img/business.jpg'},
          {id: 3, category: 'Personal Development', available: '5,525', imgUrl: '/static/img/heading.png'}
        ]
      };
  }

}
</script>

<style>
  .profile1{
    border-radius:50%;
    max-width:35%;
    margin-right:20px;
  }
  .comments{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
  }
  .page-about .page-title{
    width:100%;
    height:480px;
    background: url(/static/img/banner.png);
    background-size:100%;
  }


  .before-footer{
    align-items:center;
    display:flex;
    flex-direction:column;
  }
  .before-footer img{
    width:100%;
    margin-bottom: -20px;
  }

  .before-footer-content .span{
    color:white;
  }
  .before-footer-content{
    position:absolute;
    align-items:center;
    display:flex;
    flex-direction:column;
    color:white;
    margin-top:5%;
  }
.content{
  margin-left:5%;
}

#about .courses {
  width:63%;
}

</style>

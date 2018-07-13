<template>
    <base-layout>
    <div slot="body">
      <div class="course-cat">
        <div class="top-cat">
          <h5>Our Top Categories</h5>
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
      </div>

        <b-container>
            <h5 class="title">Our courses</h5><br/>
            <div class="btn-group">
			  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Categories
			  </button>
			  <div class="dropdown-menu cat-dropdown">
			  	<div class="btn-group">
				<div class="catdiv row">
				    <div class="cat-chooser col">
				    	<ul>
				    		<li>Backend Developer</li>
				    		<li>UI/UX Designer</li>
				    		<li>Frontend Developer</li>
				    		<li>Project Management</li>
				    		<li>Information & Cyber security</li>
				    	</ul>
				    </div>
				    <div class="col">Topics</div>
				</div>
			  </div>
			</div>
			</div>

            <div class="btn-group">
			  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Schools
			  </button>
			  <div class="dropdown-menu cat-dropdown">
			  	<div class="btn-group">
	
			    <div class=""></div>
                </div>
                </div>
			</div>
        </b-container>
        <div class="courselist">
			<div class="courses">
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
    </div>
    </base-layout>
</template>
<script defer>
import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'coursesPage',
  components: {
    BaseLayout
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

<style scoped>
.title {
    margin: 20px;
}
</style>

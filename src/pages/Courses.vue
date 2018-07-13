<template>
    <base-layout>
    <div slot="body">
        <div class="course-cat">
            <div class="top-cat">
			<h5>Our Top Categories</h5>
			<div class="container">
				<div class="row top-cat-row">
					<div class="col">
						<div class="col-topcourse">
                            <div class="transparentdiv"></div>
                            <div class="z-indexed-content">
                                <h4>Backend developer</h4>
                                <p>3,215 Courses available</p>  
                            </div>
						</div>
					</div>
					<div class="col">
						<div class="col-topcourse">
                            <div class="transparentdiv"></div>
                            <div class="z-indexed-content">
                                <h4>Business</h4>
                                <p>6,285 Courses available</p>
                            </div>
						</div>
					</div>
					<div class="col">
						<div class="col-topcourse">
							<div class="top-course-content">
                                <div class="transparentdiv"></div>
                                <div class="z-indexed-content">
                                    <h4>Personal Development</h4>
                                    <p>5,525 Courses available</p>
                                </div>
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
            
                
               <!-- <li v-for="index in 12" :key="index">
                <img src="/static/img/photo1.png"><br>
                <p>+ 23,661 students</p>
                <router-link :to="{ name: 'course' }">
                    <h5>Neural Networks and Deep Learning</h5>
                </router-link>
                <p>If you want to break into cutting-edge AI, this course will help you do so.</p>
                </li> -->
                <!-- Dummy datas -->
                <li>
                <img src="/static/img/dummies/dummy1.jpg"><br>
                <p>+ 23,661 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Neural Networks and Deep Learning</h5>
                </router-link>
                <p>If you want to break into cutting-edge AI, this course will help you do so.</p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy3.jpg"><br>
                <p>+ 13,361 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Mathematics for Machine Learning Specialization</h5>
                </router-link>
                <p>For a lot of higher level courses in Machine Learning and Data Science, you find you need to freshen up on the basics in maths - stuff you may have studied before in school or university, but which was taught in another context, or not very intuitively, such that you struggle to relate it to how it’s used in Computer Science.</p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy2.jpg"><br>
                <p>+ 12,731 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Business English: Making Presentations</h5>
                </router-link>
                <p>
                    This course teaches you language and techniques that will help you make effective presentations in English.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy4.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Cameras, Exposure, and Photography</h5>
                </router-link>
                <p>
Welcome to Course One of Photography Basics and Beyond: From Smartphone to DSLR!
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy5.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Java Programming: Solving Problems with Software</h5>
                </router-link>
                <p>
                    Learn to code in Java and improve your programming and problem-solving skills.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy6.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Introduction to C# Programming and Unity</h5>
                </router-link>
                <p>
                   This course is all about starting to learn how to develop video games using the C# programming language and the Unity game engine on Windows or Mac.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy7.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Models & Frameworks to Support Sales Planning</h5>
                </router-link>
                <p>
                    The world of business strategy is in transition. What used to work doesn't anymore -- not necessarily. 
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy8.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>How to Start Your Own Business Specialization</h5>
                </router-link>
                <p>
                    This specialization is a guide to creating your own business.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy9.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Responsive Website Basics: Code with HTML, CSS, and JavaScript</h5>
                </router-link>
                <p>
                    Welcome to Course 3 - Models & Frameworks to Support Sales Planning – In this course, you’ll go through a conceptual approach to selling models and frameworks.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy10.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>The Business of Social</h5>
                </router-link>
                <p>
                    In a 2014 study of CEOs and CMOs, IBM found 63% wanted social strategies which generate business metrics while only 20% of businesses worldwide actually have them.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy11.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Open Source tools for Data Science</h5>
                </router-link>
                <p>
                    In this course, you'll learn about Jupyter Notebooks, RStudio IDE, Apache Zeppelin and Data Science Experience.
                </p>
                </li>

                
                <li>
                <img src="/static/img/dummies/dummy12.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Innovation for Entrepreneurs: From Idea to Marketplace</h5>
                </router-link>
                <p>
                    Develop insights on navigating the innovation process from idea generation to commercialization.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy13.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Google Cloud Platform Big Data and Machine Learning Fundamentals</h5>
                </router-link>
                <p>
                    This 1-week accelerated on-demand course introduces participants to the Big Data and Machine Learning capabilities of Google Cloud Platform (GCP).
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy14.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Parallel Programming in Java</h5>
                </router-link>
                <p>
                    This course teaches learners (industry professionals and students) the fundamental concepts of parallel programming in the context of Java 8.
                </p>
                </li>

                <li>
                <img src="/static/img/dummies/dummy15.jpg"><br>
                <p>+ 15,121 students</p>
                <router-link :to="{ name: 'course' }">
                <h5>Project: Writing a Research Paper</h5>
                </router-link>
                <p>
                   This project lets you apply everything you’ve learned and gives you the practice you need for college classes by having you write a research paper. 
                </p>
                </li>
                <!-- end Dummy datas -->

                
            </ul>
			</div>
            <ul id="example-1">
  <li v-for="item in items" :key="item">
    {{ item.message }}
  </li>
</ul>
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
  }
}

</script>

<style scoped>
.title {
    margin: 20px;
}
</style>

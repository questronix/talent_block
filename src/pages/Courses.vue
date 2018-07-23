<template>
    <base-layout>
    <div slot="body">
      <div class="course-cat">
        <div class="top-cat">
          <h5>Our Top Categories</h5>
          <div class="container">
            <div class="row top-cat-row">
              <div class="col" v-for="category in categories.slice(0,3)" :key="category.id">
                <div class="col-topcourse" :style="{ 'background-image': 'url(/static/' + category.banner_img + ')' }">
                  <div class="transparentdiv"></div>
                  <div class="z-indexed-content">
                      <h4>{{category.name}}</h4>
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
        <!-- <course-list :courses="courses"></course-list> -->
        <ul>
          <li v-for="course in courses" :key="course.id">
            <img :src="'/static/' + course.thumbnail"><br>
            <!-- TODO: change course.slot to num of students enrolled to this course -->
            <p>+ {{ course.slot }} students</p>
            <router-link :to="{ path: 'courses/course?id=' + course.id }">
              <h5>{{ course.name}}</h5>
            </router-link>
            <p>{{course.short_desc}}</p>
          </li>
        </ul>
			</div>

		</div>
    </div>
    </base-layout>
</template>
<script defer>
// FIXME: CourseList component bug.
import BaseLayout from '../layouts/BaseLayout.vue';
// import CourseList from '../components/Course/CourseList.vue';
import axios from 'axios';

export default {
  name: 'coursesPage',
  components: {
    BaseLayout,
    // CourseList,
  },
  data() {
    return {
      courses: [],
      categories: 
      [
        // {id: 1, category: 'Backend developer', available: '3,215', imgUrl: '/static/img/backend.png'},
        // {id: 2, category: 'Business', available: '6,285', imgUrl: '/static/img/business.jpg'},
        // {id: 3, category: 'Personal Development', available: '5,525', imgUrl: '/static/img/heading.png'}
      ]
    }
  },
   methods:{
     getUnits: function() {
       axios.get('/courses')
        .then((response) => {
          this.courses = response.data.course;
        }).catch((err) => {
          console.log('Courses error ', err);
        });
        axios.get('/category')
        .then((response) => {
          this.categories = response.data.category
        }).catch((err) => {
          console.log('Categories Error', err);
        });
      }
  },
 
  beforeMount(){
    this.getUnits()
  }
}
</script>

<style scoped>

</style>

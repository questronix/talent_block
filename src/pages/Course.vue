<template>
  <base-layout>
    <div slot="body">
      
      <div class="container course-details">
        <div class="course-content">
          <center>
            <span class="dot">1</span>
            <span class="dot">2</span>
            <span class="dot">3</span>
            <span class="dot">4</span>
            <span class="dot">5</span>
          </center>
          <div class="course-outline">
            <div class="course-info">
              <h4>Be a professional backend programmer in hours</h4>
              <input type="radio" name="">
              <input type="radio" name="">
              <input type="radio" name="">
              <input type="radio" name="">
              <input type="radio" name="">
              <span>by Jay Tacdoro</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt finibus orci dictum consequat. </p>
            </div>
            <button class="btn btn-primary">Continue with your course</button><button class="btn trans-bordered">Write a review</button>
          </div>
          <div class="container dacbtn">
            <div class="row">
              <div class="col">
                <a href="">Description</a>
              </div>
              <div class="col">
                <a href="">About the author</a>
              </div>
              <div class="col">
                <a href="">Comments</a>
              </div>
              <div class="col">
                <a href="">Schedules</a>
              </div>
            </div>
          </div>
          <div class="course-sched">
            <div class="container">
              <div class="row">
                <div class="col day">
                  Monday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>

              <div class="row">
                <div class="col day">
                  Tuesday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>

              <div class="row">
                <div class="col day">
                  Wednesday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>

              <div class="row">
                <div class="col day">
                  Thursday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>

              <div class="row">
                <div class="col day">
                  Friday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>

              <div class="row">
                <div class="col day">
                  Saturday
                </div>
                <div class="col">
                  1:00PM - 3:30PM
                </div>
                <div class="col">
                  <button class="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="side-bar">

          <div class="sidebar-content">
            <ul>
              <li>
                1.) Introduction to becoming a backend dev
              </li>
              <li>
                2.) Learning your basics
              </li>
              <li>
                3.) Lets expand on this
              </li>
              <li>
                4.) Test your skills
              </li>
              <li>
                5.) Honing your skills
              </li>
            </ul>
          </div>
          <h4>Related Course</h4>
          <div class="relatedcourse">
            <h5>Become a better technical writer</h5>
            <p>16hrs</p>
          </div>
          <div class="relatedcourse">
            <h5>Become a better technical writer</h5>
            <p>16hrs</p>
          </div>
          <div class="relatedcourse">
            <h5>Become a better technical writer</h5>
            <p>16hrs</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';

export default {
  name: 'coursePage',
  components: {
    BaseLayout,
  }
}
</script>
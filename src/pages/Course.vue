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
            <div class="transparentdiv">
              <div class="course-info">
                <div style="width: 50%;">
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
            </div>
            
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="author-tab" data-toggle="tab" href="#author" role="tab" aria-controls="author" aria-selected="false">About the Author</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="comments-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="schedules-tab" data-toggle="tab" href="#schedules" role="tab" aria-controls="schedules" aria-selected="false">Schedules</a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              <div class="card">
                <div class="card-body">
                  <span>The AP English Literature and Composition course is intended to give you the experience of a typical introductory college literature course. It includes intensive study of representative works from various genres, periods, and cultures, concentrating on works of recognized literary merit.</span>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="author" role="tabpanel" aria-labelledby="author-tab">
              <div class="card">
                <div class="card-body">
                  <span>John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.</span>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
              <div class="card">
                <div class="card-body">
                  <span>Comments Section Sample</span>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="schedules" role="tabpanel" aria-labelledby="schedules-tab">
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
            <div class="transparentdiv"></div>
            <div class="z-indexed-content">
              <h5>Become a better technical writer</h5>
              <p>16hrs</p>
            </div>
          </div>
          <div class="relatedcourse">
            <div class="transparentdiv"></div>
            <div class="z-indexed-content">
              <h5>Become a better technical writer</h5>
              <p>16hrs</p>
            </div>
          </div>
          <div class="relatedcourse">
            <div class="transparentdiv"></div>
            <div class="z-indexed-content">
              <h5>Become a better technical writer</h5>
              <p>16hrs</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
  </base-layout>
</template>

<script>  
import BaseLayout from '../layouts/BaseLayout.vue';

$(function () {
  $('#myTab li:last-child a').tab('show')
})

export default {
  name: 'coursePage',
  components: {
    BaseLayout,
  }
}
</script>

<style>
.nav {
  border-style: inset;
}
.nav a {
  color: #000;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
  background-color: lightgray !important;
}
.course-sched{
  margin-top: 0 !important;
}
.tab-content>.active {
  padding-top: 40px;
}
.card {
  text-align: justify;
  color: #000;
}
span {
  align-content: justify;
  font-size: 1.25em;
  letter-spacing: 2px;
}
</style>
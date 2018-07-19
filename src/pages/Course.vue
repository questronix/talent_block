<template>
  <base-layout>
    <div slot="body">
      
      <div class="container course-details" v-if="courses.length">
        <div class="course-content">
          <center>
            <span class="dot">1</span>
            <span class="dot">2</span>
            <span class="dot">3</span>
            <span class="dot">4</span>
            <span class="dot">5</span>
          </center>
          <div class="course-outline" :style="{ 'background-image': 'url(' + courses[0].banner_img + ')' }">
            <div class="transparentdiv">
              <div class="course-info">
                <div style="width: 50%;">
                  <h4>{{courses[0].name}}</h4>
                  <input type="radio" name="">
                  <input type="radio" name="">
                  <input type="radio" name="">
                  <input type="radio" name="">
                  <input type="radio" name="">
                  <span>by Jay Tacdoro</span>
                  <p>{{courses[0].short_desc}}</p>
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
                  <span>{{courses[0].full_desc}}</span>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
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
                      <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#paymentModal">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>

        <!-- Modal -->
        <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <CardsPayment :cardsData="this.cardsData[0]"></CardsPayment>
                <CardsPayment :cardsData="this.cardsData[1]"></CardsPayment>
                <CardsPayment :cardsData="this.cardsData[2]"></CardsPayment>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Modal -->

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
import CardsPayment from '../components/Payment/CardsPayment.vue';
import axios from 'axios';

$(document).ready(function () {
  $('#myTab li:last-child a').tab('show')
  $('#paymentModal').modal('show')
  // $('button').click(function(e){
  //   e.preventDefault();
  //   this.cardsData.forEach(function(data){
  //     for(var i=0; i<data.cardNumber.length; i++){
  //       if(i>5 && data.cardNumber[i] != '-')
  //         data.cardNumber[i] = 'x';
  //     }
  //     console.log(`Card Number: $(data.cardNumber)`);
  //     this.filteredData.push(data.cardNumber);
  //   })
  // })
})

export default {
  name: 'coursePage',
  data: () => {
    return {  /*SAMPLE DATA for CardsPayment component*/
      cardsData: [
        {cardType: 'MasterCard', cardNumber: '5500-0000-0000-0004'},
        {cardType: 'Visa', cardNumber: '4111-1111-1111-1111'},
        {cardType: 'American Express', cardNumber: '3400-0000-0000-009'}
      ],
      filteredData: {}
    }
  },
  components: {
    BaseLayout,
    CardsPayment
  },data() {
    return {
      courses: []
    }
  },
  methods:{
    getUnits: function() {
      axios.get('/courses/' + this.$route.query.id)
      .then((response) => {
        this.courses = response.data.course
        console.log(response.data)
      }).catch((err) => {
        console.log('x')
      });
    }
  },
 
  beforeMount(){
    this.getUnits()
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
.card-body span {

  align-content: justify;
  font-size: 1.25em;
  letter-spacing: 2px;
}
.modal-header {
  border-bottom: 0 !important;
}
#centered {
  text-align: center;
  font-weight: bold;
}
</style>
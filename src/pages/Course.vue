<template>
  <base-layout>
    <div slot="body">
      <div class="container course-details" v-if="courses.length">
        <div class="course-content">
          <div class="course-outline" :style="{ 'background-image': 'url(/static/' + courses[0].banner_img + ')' }">
            <div class="transparentdiv">
              <div class="course-info">
                <div class="radio-part">
                  <h4>{{courses[0].name}}</h4>
                  <b-form-group>
                    <b-form-radio-group v-model="selected" :options="options" name="radioInline">
                    </b-form-radio-group>
                  </b-form-group>
                  <span>by Jay Tacdoro</span>
                  <span id="selected-text">{{selected}}</span>
                </div>
                <b-button variant="primary">Continue with your course</b-button><b-button>Write a review</b-button>
              </div>
            </div>
          </div>

          <b-tabs>
            <b-tab title="Description" active>
              <b-card>
                <span>{{courses[0].full_desc}}</span>
              </b-card>
            </b-tab>
            <b-tab title="About the Author">
              <b-card>
                <span>John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.</span>
              </b-card>
            </b-tab>
            <b-tab title="Comments">
              <b-card>
                <span>Comments Section Sample</span>
              </b-card>
            </b-tab>
            <b-tab title="Schedules">
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
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
                      <b-btn v-b-modal.paymentModal> Enroll now </b-btn>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
        <!-- Modal -->
        <b-modal id="paymentModal" hide-footer centered>
          <div class="paymentModal-content">
            <div class="close-icon">
              <i class="times" aria-hidden="true"></i>
            </div>
            <div class="card-options">
              <CardsPayment :cardsData="this.cardsData[0]" @showModal="showSuccessWindow"></CardsPayment>
              <CardsPayment :cardsData="this.cardsData[1]" @showModal="showSuccessWindow"></CardsPayment>
              <CardsPayment :cardsData="this.cardsData[2]" @showModal="showSuccessWindow"></CardsPayment>
            </div>
          </div>
        </b-modal>
        <!-- End of Modal -->
        <!-- Modal -->
        <b-modal ref="paymentSuccess" hide-header hide-footer centered>
            <PaymentSuccess url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Blue_check.svg/2000px-Blue_check.svg.png" @closeModal="closeSuccessWindow"/>
        </b-modal>
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
import PaymentSuccess from '../components/Payment/PaymentSuccess.vue';
import axios from 'axios';

export default {
  name: 'coursePage',
  data: () => {
    return {  /*SAMPLE DATA for CardsPayment component and Radio inputs*/
      courses: [],
      cardsData: [
        {cardType: 'MasterCard', cardNumber: '5500-0000-0000-0004'},
        {cardType: 'Visa', cardNumber: '4111-1111-1111-1111'},
        {cardType: 'American Express', cardNumber: '3400-0000-0000-009'}
      ],
      selected: '',
      options: []
    }
  },
  components: {
    BaseLayout,
    CardsPayment,
    PaymentSuccess
  },
  methods:{
    getUnits: function() {
      axios.get('/courses/' + this.$route.query.id)
      .then((response) => {
        this.courses = response.data.course;
        this.options.push({text: '', value: `${response.data.course[0].short_desc}`});
        this.options.push({text: '', value: `Updated at: ${response.data.course[0].updated_at}`});
        this.options.push({text: '', value: `Created at: ${response.data.course[0].created_at}`});
        this.options.push({text: '', value: `Tags: ${response.data.course[0].tags}`});
        this.options.push({text: '', value: `Slots: ${response.data.course[0].slot}`});
        this.selected = response.data.course[0].short_desc;
      }).catch((err) => {
        console.log('Course error ', err)
      });
    },
    showSuccessWindow: function() {
      this.$root.$emit('bv::hide::modal','paymentModal')
      this.$refs.paymentSuccess.show()
    },
    closeSuccessWindow: function() {
      this.$refs.paymentSuccess.hide()
    }
  },
 
  beforeMount(){
    this.getUnits()
  }
}
</script>

<style>
.course-sched{
  margin-top: 0 !important;
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
.nav-link {
  color: #000;
}
.nav-link.active {
  color: #4a74cc !important;
}
.tab-content>.tab-pane {
  padding-top: 40px;
}
.btn-primary {
  background-color: #4a74cc !important;
}
.btn-secondary {
  background-color: #4a74cc !important;
}
.modal-header {
  border-bottom: 0 !important;
}
.radio-part {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#selected-text {
  margin-bottom: 10px;
}
.paymentModal-content {
  display: flex;
  flex-direction: column;
}
.close-icon {
  display: inherit;
  flex-direction: inherit;
  justify-content: flex-end;
}
.card-options {
  display: inherit;
  flex-direction: inherit;
  justify-content: flex-start
}
#centered {
  text-align: center;
  font-weight: bold;
}
</style>
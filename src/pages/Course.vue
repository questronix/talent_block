<template>
  <base-layout>
    <div slot="body">
      <div class="container course-details" v-if="courses.length">
        <div class="course-content">
          <div class="course-outline" :style="{ 'background-image': 'url(' + courses[0].banner_img + ')' }">
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
              <p class="desc">{{courses[0].full_desc}}</p>
            </b-tab>
            <b-tab title="About the Author" >
              <p class="desc"><span>John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.</span></p>
            </b-tab>
            <b-tab title="Comments">
               <b-list-group>
                  <b-list-group-item>Sample Comment</b-list-group-item>
                </b-list-group>
            </b-tab>
            <b-tab title="Schedule">
              <div class="course-sched">
                <div class="container sched">
                  <div class="row" v-for="sched in schedules" :key="sched.id">
                    <div class="col day">
                      {{ sched.day }}
                    </div>
                    <div class="col">
                      {{ sched.time}}
                    </div>
                    <div class="col">
                      <button class="btn btn-primary">Enroll Now</button>
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
        <!-- Modal -->
        <b-modal ref="paymentSuccess" hide-header hide-footer centered>
            <PaymentSuccess url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Blue_check.svg/2000px-Blue_check.svg.png" @closeModal="closeSuccessWindow"/>
        </b-modal>
        <!-- End of Modal -->

        <div class="side-bar">
          <div class="sidebar-content">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="info">1.) Introduction to becoming a backend dev</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      <b-list-group>
                        <b-list-group-item>Introduction to becoming a backend dev</b-list-group-item>
                      </b-list-group>
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="info">2.) Learning your basic</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Learning your basic
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="info">3.) Let's expand on this</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Let's expand on this
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion4 variant="info">4.) Test your skill</b-btn>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Test your skill
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion5 variant="info">5.) Honing your skill</b-btn>
                </b-card-header>
                <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      Honing your skill
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
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
      schedules: [
        {
          day: 'Monday', time: '1:00PM - 3:30PM'
        },
        {
          day: 'Tuesday', time: '1:00PM - 3:30PM'
        },
        {
          day: 'Wednesday', time: '1:00PM - 3:30PM'
        },
        {
          day: 'Thursday', time: '1:00PM - 3:30PM'
        },
        {
          day: 'Friday', time: '1:00PM - 3:30PM'
        },
        {
          day: 'Saturday', time: '1:00PM - 3:30PM'
        }
      ],
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

<style scoped>
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
  box-shadow: 1px 1px 1px 2px #eeeeee;
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

a.btn.btn-info.btn-block.collapsed {
  background: gray;
  border: 0;
}

a.btn.btn-info.btn-block {
    background: #4c4c4c;
    border: 0;
}

ul#__BVID__12__BV_tab_controls_ {
  box-shadow: 1px 2px 3px grey;
}

p.desc {
  padding: 20px;
  color: black;
}
.tab-pane {
  color: black;
}

.container.sched {
  margin-top: 20px;
}
</style>
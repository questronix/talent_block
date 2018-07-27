<template>
  <base-layout>
    <div slot="body">  
      <div class="transaction">
        <b-col cols="4" offset-md="4">
       <div>
       <b-card>
        <b-list-group flush>
          <b-list-group-item>
            <b-row>
            <b-col>  
            <p class="category">Username</p>
            </b-col>
            <b-col>
            <p class="value">kendrick004</p>
            </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
            <b-col>  
            <p class="category">Date</p>
            </b-col>
            <b-col>
            <p class="value">{{currentTime(date)}}</p>
            </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item>
            <b-row>
            <b-col>  
            <p class="category">Transaction No.</p>
            </b-col>
            <b-col>
            <p class="value">1234567</p>
            </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>

        <div id="colBar">
          <p id="itemTitle">Item(s)</p>
          <p id="priceTitle">Price</p>
        </div>

        <b-card-body>
          <div class="purchased-item">
            <b-row>
                <b-col cols="3">
                  <img id="coursePic" src="/static/img/photo1.png"  height="70" width="70">
                </b-col>
                <b-col>
                  <b-row>
                    <p id="courseTitle">Advanced Speaking and Listening Project</p>
                  </b-row>
                  <b-row>
                    <p id="courseDesc">Learners will present a well-organized academic speech on a topic in an academic field of the learner's choice.</p>
                  </b-row>
                </b-col>
                <b-col cols="3">
                    <p id="price" style="float: right">$2</p>
                </b-col>
            </b-row>
          </div>
        </b-card-body>

        <div slot="header">
          <img src="/static/img/logo-2.png" height="40" width="40" style="float:left">
          <p id="status">Pending</p>
        </div>
        <div slot="footer">
           <small class="text-muted" style="align:center">Terms and conditions</small>
        </div>

    </b-card>
      </div>
      </b-col>
      </div>
    </div>
  </base-layout>
</template>

<script>  
// FIXME: Please fix keepSignIn bug.
import BaseLayout from '../layouts/BaseLayout.vue';
import moment from 'moment';

export default {
  name: 'transactionPage',
  data() {
    return {
      userInfo: [
        { username: 'kendrick004', date: '10/23/92', transaction_no: '012345' },
  
      ]
    };
  },
  components: {
    BaseLayout,
  },
  methods: {
    currentTime(date) {
      return moment(date).format('MM/DD/YY');
    }
  }
}
</script>


<style scoped>
body {
  overflow: hidden;
}

.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color:white !important;
    border-bottom: none !important;
}

.card-footer {
    padding: .75rem 1.25rem;
    background-color:white !important;
    border-top: none;
}

#status{
  float: right;
  color: red;
  font-weight: bold;
  font-size: 25px;
}

.card-body{
  margin-top: -20px;
}

.category{
  font-weight: bold;
}

.value{
  float: right;
  color: #6c757d;
}

.purchased-item{
  padding-top: 20px;
}


#coursePic{
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

#courseTitle{
  font-weight: bold;
}

#courseDesc{
   color: #6c757d;
   font-size: 15px;
}
.row{
  margin-bottom: -12px !important;
}

#price{
  font-weight: bold;
}

#colBar{
  background-color: #007bff;
  height: 30px;
}

#itemTitle{
  color: white;
  font-weight: bold;
  float: left;
}

#priceTitle{
  color: white;
  font-weight: bold;
  float: right;
}
</style>

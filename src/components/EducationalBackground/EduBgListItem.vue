<template>
  <div>
    <b-media>
      <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
      <h5 class="mt-0 mb-1">{{education.name}}</h5>
      <span>{{education.course}}{{(education.gpa)? ', GPA ' + education.gpa : ''}}</span><br>
      <!-- <span>{{ showEducYears(education.start_year, education.end_year) }}</span><br> -->
      <span>{{ education.start_year }} - {{ education.end_year }}</span><br>
      <span>{{education.address}}</span><br>
      <span><b-button @click="update">Update</b-button></span>
      <span><b-button @click="remove" variant="danger">Remove</b-button></span>
    </b-media>

  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'EduBgListItem',
  props: {
    education: Object,
  },
  methods: {
    showEducYears: function(start_date, end_date){
			return `${moment(start_date).format('YYYY')} - ${moment(end_date).format('YYYY')}`;
    },
    update() {
      this.$emit('onUpdate');
    },
    remove () {
      this.$emit('onRemove');
    }
  }
}
</script>


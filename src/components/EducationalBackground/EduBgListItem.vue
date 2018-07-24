<template>
  <div>
    <b-media>
      <b-img src="/static/img/school_circle.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <h5 class="mt-0 mb-1">{{education.name}}
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      <span>{{education.course}}{{(education.gpa)? ', GPA ' + education.gpa : ''}}</span><br>
      <!-- <span>{{ showEducYears(education.start_year, education.end_year) }}</span><br> -->
      <span>{{ education.start_year }} - {{ education.end_year }}</span><br>
      <span>{{education.address}}</span><br>

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
    update() {
      this.$emit('onUpdate');
    },
    remove() {
      this.$emit('onRemove');
    }
  }
}
</script>

<style>
/* .updbtn, .rembtn {
  float: right;
} */

.updbtn {
  color: blue;
}

.rembtn {
  color: red;
}

.bnts-prfile {
  float: right;
}
</style>

<template>
  <div>
    <b-media>
      <b-img src="/static/img/occupation.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <h5>
        <span>{{ occupation.name }}</span>
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      <span>{{ occupation.position }}</span>
      <span>{{ occupation.department }}</span>
      <span>{{ occupation.address }}</span><br>
      <span>{{ occupation.salary }}</span><br>
      <span>{{ occupation.duties }}</span><br>
      <span>{{ displayOccupationDate }}</span><br>
      <span>{{ occupation.reasone }}</span><br>
    </b-media>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OccuBgListItem',
  props: {
    occupation: Object,
  },
  methods: {
    update() {
      this.$emit('onUpdate');
    },
    remove() {
      this.$emit('onRemove');
    },
  },
  computed: {
    displayOccupationDate() {
      if (this.occupation.end_month === -1 && this.occupation.end_year === -1) {
        return `${moment(this.occupation.start_month, 'MM').format('MMM')} ${this.occupation.start_year} - Present`;
      }
      return `${moment(this.occupation.start_month, 'MM').format('MMM')} ${this.occupation.start_year} - ${moment(this.occupation.end_month, 'MM').format('MMM')} ${this.occupation.end_year}`;
    }
  }
}
</script>

<style>
.media {
  padding: 10px;
  border: 2px solid #f3f3f3;
  margin-bottom: 10px;
}

.media:hover {
  background-color: #eeeeee;
  transition: background-color 0.9s;
}


</style>


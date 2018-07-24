<template>
  <div>
    <b-media>
      <h5>
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      <span>{{ occupation.name }}</span><br>
      <span>{{ occupation.position }}</span>
      <span>{{ occupation.department }}</span>
      <span>{{ occupation.address }}</span><br>
      <span>{{ occupation.salary }}</span><br>
      <span>{{ occupation.duties }}</span><br>
      <span>{{ occupation.start_month }} {{ occupation.start_year }} - {{ occupation.end_month }} {{ occupation.end_year }}</span><br>
      <span>{{ occupation.reasone }}</span><br>
    </b-media>
  </div>
</template>

<script>

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
    }
  }
}
</script>


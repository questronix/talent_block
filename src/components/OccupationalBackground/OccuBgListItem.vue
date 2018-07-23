<template>
  <div>
    <b-media>
      <span>{{ occupation.name }}</span><br>
      <span>{{ occupation.position }}</span>
      <span>{{ occupation.department }}</span>
      <span>{{ occupation.address }}</span><br>
      <span>{{ occupation.salary }}</span><br>
      <span>{{ occupation.duties }}</span><br>
      <span>{{ occupation.start_month }} {{ occupation.start_year }} - {{ occupation.end_month }} {{ occupation.end_year }}</span><br>
      <span>{{ occupation.reasone }}</span><br>
      <span><b-button @click="update">Update</b-button></span>
      <span><b-button @click="remove" variant="danger">Remove</b-button></span>
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


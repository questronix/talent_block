<template>
  <div>
    <b-media>
      <span>{{ family.fn }} {{ family.mn }} {{ family.ln }}</span><br>
      <span>{{ family.contact }}</span>
      <span>{{ family.occupation }}</span>
      <span>{{ family.address }}</span><br>
      <span><b-button @click="update">Update</b-button></span>
      <span><b-button @click="remove" variant="danger">Remove</b-button></span>
    </b-media>
  </div>
</template>

<script>

export default {
  name: 'FamBgListItem',
  props: {
    family: Object,
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


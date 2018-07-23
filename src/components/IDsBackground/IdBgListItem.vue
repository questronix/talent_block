<template>
  <div>
    <b-media>
      <span>{{ idBg.name }}</span>
      <span>{{ idBg.number }}</span>
      <span><b-button @click="update">Update</b-button></span>
      <span><b-button @click="remove" variant="danger">Remove</b-button></span>
    </b-media>
  </div>
</template>

<script>

export default {
  name: 'IdBgListItem',
  props: {
    idBg: Object,
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


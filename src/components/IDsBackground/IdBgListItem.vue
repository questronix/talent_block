<template>
  <div>
    <b-media>
      <h5>
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      <span>{{ idBg.name }}</span>
      <span>{{ idBg.number }}</span>
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


<template>
  <div>
    <b-media>
      <b-img src="/static/img/id_circle.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <h5>
        <span>{{ idBg.name }}</span>
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      
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
  data() {
    return {
      
    }
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


<template>
  <div>
    <b-media style="width: 100%;">
      <h5>
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
      </h5>
      <span class="fambg">{{ family.fn }} {{ family.mn }} {{ family.ln }}
        
      </span><br>
      <span>{{ family.contact }}</span>
      <span>{{ family.occupation }}</span>
      <span>{{ family.address }}</span><br>

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

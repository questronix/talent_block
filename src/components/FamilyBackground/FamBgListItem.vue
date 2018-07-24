<template>
  <div>
    <b-media style="width: 100%;">
      <b-img v-if="family.type == 'Father'" src="/static/img/familyType1.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <b-img v-if="family.type == 'Mother'" src="/static/img/familyType2.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <b-img v-if="family.type == 'Brother'" src="/static/img/familyType3.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <b-img v-if="family.type == 'Sister'" src="/static/img/familyType4.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <b-img v-if="family.type == 'Grandfather'" src="/static/img/familyType5.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      <b-img v-if="family.type == 'Grandmother'" src="/static/img/familyType6.svg" slot="aside" top width="64" height="64" alt="placeholder" />
      
      <h5>
        <span class="fambg">{{ family.fn }} {{ family.mn }} {{ family.ln }}
        <div class="bnts-prfile">
          <span class="updbtn"><b-btn size="sm" variant="outline-primary" @click="update"><font-awesome-icon icon="edit" /></b-btn></span>
          <span class="rembtn"><b-btn size="sm" variant="outline-danger" @click="remove"><font-awesome-icon icon="times-circle" /></b-btn></span>
        </div>
        </span>
      </h5>
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

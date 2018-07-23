<template>
  <div>
    <ul class="list-unstyled" v-show="families.length > 0">
      <fam-bg-list-item 
        v-for="(family, index) in families" 
        :key="family.id" 
        :family="family"
        @onRemove="onRemove(index, family.id)"
        @onUpdate="onUpdate(family)"></fam-bg-list-item>
    </ul>

	<!--  FAMILY BACKGROUND -->
		<b-modal id="familyModal" ok-only
						ref="familyModal"
						title="Valid ID" @ok="famUpdateSubmit">
			<form @submit.stop.prevent="famSubmit">
					<b-form-group
						label="First Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.fn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Last Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Last Name"
						v-model="family.ln"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Middle Name:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.mn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Contact No:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Contact number"
						v-model="family.contact"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Occupation:"
						label-for="fn">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="First Name"
						v-model="family.occupation"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

    <b-modal 
      id="confirmRemoveModal"
      title="Confirm" 
      @ok="educRemoveSubmit">
      Are you sure you want to remove this item?
    </b-modal>
  </div>
</template>


<script>
import FamBgListItem from "./FamBgListItem.vue";
import axios from 'axios';

export default {
  name: 'famBgList',
  props: {
    families: Array,
  },
  data() {
    return {
      family: {},
      selectedIndex: -1,
    }
  },
  components: {
    FamBgListItem,
  },
  methods: {
    onUpdate(family) {
      this.family = family;
      this.$root.$emit('bv::show::modal','educUpdateModal');
    },
    educUpdateSubmit() {
      axios.put('/students/family', this.family)
        .then((response) => {
          this.$toasted.success('Successfully updated.');
        }).catch((err) => {
          this.$toasted.error('Error while updating your background information. Please try again or reload the page.')
          console.log('Background Info Update Error: ', err);
        });
    },
    onRemove(index, id) {
      this.$root.$emit('bv::show::modal','confirmRemoveModal');
      this.family = {};
      this.family.id = id;
      this.selectedIndex = index;
    },
    educRemoveSubmit() {
      axios.delete(`/students/family/${this.family.id}`)
        .then((response) => {
          this.$emit('updateList', this.selectedIndex);
          this.$toasted.success('Successfully removed.');
        }).catch((err) => {
          this.$toasted.error('Error while removing data. Please try again or reload the page.')
          console.log('Background Info Delte Error: ', err);
        });
    }
  }
}
</script>

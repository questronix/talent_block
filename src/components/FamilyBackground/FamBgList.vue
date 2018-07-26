<template>
  <div style="width: 100%">
    <ul class="list-unstyled" v-show="families.length > 0">
      <fam-bg-list-item 
        v-for="(family, index) in families" 
        :key="family.id" 
        :family="family"
        @onRemove="onRemove(index, family.id)"
        @onUpdate="onUpdate(family)"></fam-bg-list-item>
    </ul>

	<!--  FAMILY BACKGROUND -->
		<b-modal id="familyUpdateModal" ok-only
						ref="familyUpdateModal"
						title="Family Background" @ok="famUpdateSubmit">
      <b-alert :show="alert" variant="danger"> {{alertMsg}} </b-alert>
			<form @submit.stop.prevent="famUpdateSubmit">
						<b-form-group
												label="Relationship"
												label-for="type">
						<b-form-select id="type"
													:options="{ 'Father': 'Father', 'Mother' : 'Mother', 'Sister': 'Sister', 'Brother': 'Brother', 'Wife': 'Wife', 'Husband': 'Husband', 'Dependents': 'Dependents', 'Grandfather' : 'Grandfather', 'Grandmother':'Grandmother'}"
													v-model="family.type">
						</b-form-select>
					</b-form-group>
					<b-form-group
						label="First Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="First Name"
						v-model="family.fn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Last Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Last Name"
						v-model="family.ln"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Middle Name:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Middle Name"
						v-model="family.mn"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Contact No:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Contact number"
						v-model="family.contact_no"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Occupation:"
						label-for="fn">
						<b-form-input 
						type="text"
						placeholder="Occupation"
						v-model="family.occupation"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

    <b-modal 
      id="famConfirmRemoveModal"
      title="Confirm" 
      @ok="famRemoveSubmit">
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
      alert: false,
      alertMsg: 'Please fill up all the fields.'
    }
  },
  components: {
    FamBgListItem,
  },
  methods: {
    onUpdate(family) {
      this.familt = {};
      this.alert = false;
      this.family = family;
      this.$root.$emit('bv::show::modal','familyUpdateModal');
    },
    famUpdateSubmit(e) {
      e.preventDefault();
			if(this.family.fn === '' ||
				this.family.ln === '' ||
				this.family.mn === '' ||
				this.family.contact_no === '' ||
				this.family.occupation === '' ||
				this.family.type === ''){
			
        this.alert = true;
      }else {
        axios.put('/students/family', this.family)
          .then((response) => {
            this.$toasted.success('Successfully updated.');
            this.alert = false;
            this.$refs.familyUpdateModal.hide();
          }).catch((err) => {
            this.$toasted.error('Error while updating your background information. Please try again or reload the page.')
            console.log('Background Info Update Error: ', err);
          });
      }
    },
    onRemove(index, id) {
      this.$root.$emit('bv::show::modal','famConfirmRemoveModal');
      this.family = {};
      this.family.id = id;
      this.selectedIndex = index;
    },
    famRemoveSubmit() {
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

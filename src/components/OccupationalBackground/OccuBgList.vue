<template>
  <div>
    <ul class="list-unstyled" v-show="occupations.length > 0">
      <occu-bg-list-item 
        v-for="(occupation, index) in occupations" 
        :key="occupation.id" 
        :occupation="occupation"
        @onRemove="onRemove(index, occupation.id)"
        @onUpdate="onUpdate(occupation)"></occu-bg-list-item>
    </ul>

	<!--  OCCUPATIONAL BACKGROUND -->
		<b-modal id="occupationUpdateModal" ok-only
						ref="occupationUpdateModal"
						title="Occupational Background" @ok="occuUpdateSubmit">
			<form @submit.stop.prevent="occuUpdateSubmit">
					<b-form-group
						label="Enter your Occupation:"
						label-for="name">
						<b-form-input 
						id="occupation"
						type="text"
						placeholder="Occupation"
						v-model="occupation.name"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter your Position:"
						label-for="name">
						<b-form-input 
						id="position"
						type="text"
						placeholder="Position / Job Title"
						v-model="occupation.position"></b-form-input>
					</b-form-group>

					<label class="mr-sm-2" for="start_year">Date Started</label>
						<b-form-select class="mb-3"
													:options="{ 1 : 'Janauary', 2 : 'Febrauary', 3 : 'March', 4 : 'April', 5 : 'May', 6 : 'June', 7 : 'July', 8 : 'August', 9 : 'September', 10 : 'October', 11 : 'November', 12 : 'December'}"
													v-model="occupation.start_month"
													id="start_year">
								<template slot="first">
									<option :value="null" disabled>Select Month</option>
								</template>
						</b-form-select>
						<b-form-select class="mb-3"
													:options="years"
													v-model="occupation.start_year"
													id="end_year">
								<template slot="first">
									<option :value="null" disabled>Select Year</option>
								</template>
						</b-form-select>

						<label class="mr-sm-2" for="start_year">Date Ended </label>
						<b-form-select class="mb-3"
													:options="{ 1 : 'Janauary', 2 : 'Febrauary', 3 : 'March', 4 : 'April', 5 : 'May', 6 : 'June', 7 : 'July', 8 : 'August', 9 : 'September', 10 : 'October', 11 : 'November', 12 : 'December'}"
													v-model="occupation.end_month"
													id="start_year">
								<template slot="first">
									<option :value="null" disabled>Select Month</option>
								</template>
						</b-form-select>
						<b-form-select class="mb-3"
													:options="years"
													v-model="occupation.end_year"
													id="end_year">
								<template slot="first">
									<option :value="null" disabled>Select Year</option>
								</template>
						</b-form-select>

					<b-form-group
						label="Enter your Department:"
						label-for="name">
						<b-form-input 
						id="department"
						type="text"
						placeholder="Department"
						v-model="occupation.department"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Enter address:"
						label-for="address"
					>
					<b-form-textarea type="text" rows="5"
					id="address"
					v-model="occupation.address"></b-form-textarea>
					</b-form-group>

					<b-form-group
						label="Enter your Salary (Optional):"
						label-for="salary">
						<b-form-input 
						id="name"
						type="number"
						placeholder="Salary"
						v-model="occupation.salary"></b-form-input>
					</b-form-group>

					<b-form-group
						label="What are your duties?"
						label-for="duties"
					>
					<b-form-textarea type="text" rows="5"
					id="duties"
					v-model="occupation.duties"></b-form-textarea>
					</b-form-group>

					<b-form-group
						label="Enter your reason why you leave:"
						label-for="reason"
					>
					<b-form-textarea type="text" rows="5"
					id="reason"
					v-model="occupation.reason"></b-form-textarea>
					</b-form-group>
					
			</form>
		</b-modal>

    <b-modal 
      id="occuConfirmRemoveModal"
      title="Confirm" 
      @ok="occuRemoveSubmit">
      Are you sure you want to remove this item?
    </b-modal>
  </div>
</template>


<script>
import OccuBgListItem from "./OccuBgListItem.vue";
import moment from 'moment';
import axios from 'axios';

let base_year = 1974;
let years = Array.from({length: (moment().get('year') - base_year)}, (v, k) => {
	return {
		value: k+base_year + 1,
		text: k+base_year + 1	
	};
});

export default {
  name: 'occuBgList',
  props: {
    occupations: Array,
  },
  data() {
    return {
      occupation: {},
      selectedIndex: -1,
      years: years,
    }
  },
  components: {
    OccuBgListItem,
  },
  methods: {
    onUpdate(occupation) {
      this.occupation = occupation;
      this.$root.$emit('bv::show::modal','occupationUpdateModal');
    },
    occuUpdateSubmit() {
      axios.put('/students/occupation', this.occupation)
        .then((response) => {
          this.$toasted.success('Successfully updated.');
        }).catch((err) => {
          this.$toasted.error('Error while updating your background information. Please try again or reload the page.')
          console.log('Background Info Update Error: ', err);
        });
    },
    onRemove(index, id) {
      this.$root.$emit('bv::show::modal','occuConfirmRemoveModal');
      this.occupation = {};
      this.occupation.id = id;
      this.selectedIndex = index;
    },
    occuRemoveSubmit() {
      axios.delete(`/students/occupation/${this.occupation.id}`)
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

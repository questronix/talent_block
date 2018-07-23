<template>
  <div>
    <ul class="list-unstyled" v-show="educations.length > 0">
      <edu-bg-list-item 
        v-for="education in educations" 
        :key="education.id" 
        :education="education"
        @onRemove="onRemove(education.id)"
        @onUpdate="onUpdate(education)"></edu-bg-list-item>
    </ul>

    <!--  EDUCCATIONAL BACKGROUND -->
    <b-modal id="educUpdateModal"
            ok-title="Save"
            ref="educUpdateModal"
            title="Educational Background" @ok="educUpdateSubmit">
      <form @submit.stop.prevent="educSubmit">
          <b-form-group
            label="Enter School name:"
            label-for="name">
            <b-form-input 
            id="name"
            type="text"
            placeholder="School Name"
            v-model="education.name"></b-form-input>
          </b-form-group>

          <b-form-group
                        label="Degree"
                        label-for="degree">
            <b-form-select id="degree"
                          :options="{ 'Undergraduate': 'Undergraduate', 'Masteral': 'Masteral', 'Graduate': 'Graduate', 'Doctoral':'Doctoral', 'Vocational':'Vocational'}"
                          v-model="education.type">
            </b-form-select>
          </b-form-group>

          <b-form-group
            label="Enter your course:"
            label-for="course"
          >
          <b-form-input type="text"
          id="course"
          placeholder="Course"
          v-model="education.course"></b-form-input>
          </b-form-group>

          <b-form inline>
            <label class="mr-sm-2" for="start_year">School Years</label>
            <b-form-select class="mb-3"
                          :options="years"
                          v-model="education.start_year"
                          id="start_year">
                <template slot="first">
                  <option :value="null" disabled>Select Start Year</option>
                </template>
            </b-form-select> - &nbsp;
            <b-form-select class="mb-3"
                          :options="years"
                          v-model="education.end_year"
                          id="end_year">
                <template slot="first">
                  <option :value="null" disabled>Select End Year</option>
                </template>
            </b-form-select>
          </b-form>

          <b-form-group
            label="GPA (Optional)"
            label-for="gpa"
          >
          <b-form-input type="number"
          id="gpa"
          placeholder="Grade"
          v-model="education.gpa"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Enter school address:"
            label-for="address"
          >
          <b-form-textarea type="text" rows="5"
          id="address"
          v-model="education.address"></b-form-textarea>
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
import moment from 'moment';
import EduBgListItem from "./EduBgListItem.vue";
import axios from 'axios';

let base_year = 1974;
let years = Array.from({length: (moment().get('year') - base_year)}, (v, k) => {
	return {
		value: k+base_year + 1,
		text: k+base_year + 1	
	};
});

export default {
  name: 'EduBgList',
  props: {
    educations: Array,
  },
  data() {
    return {
      education: {},
      tempEduc: {},
      years: years,
    }
  },
  components: {
    EduBgListItem,
  },
  methods: {
    onUpdate(education) {
      this.education = education;
      this.$root.$emit('bv::show::modal','educUpdateModal');
    },
    educUpdateSubmit() {
      axios.put('/students/education', this.education)
        .then((response) => {
          this.$toasted.success('Successfully updated.');
        }).catch((err) => {
          this.$toasted.error('Error while updating your background information. Please try again or reload the page.')
          console.log('Background Info Update Error: ', err);
        });
    },
    onRemove(id) {
      this.$root.$emit('bv::show::modal','confirmRemoveModal');
      this.education = {};
      this.education.id = id;
    },
    educRemoveSubmit() {
      axios.delete(`/students/education/${this.education.id}`)
        .then((response) => {
          this.$emit('updateList', this.education.id);
          this.$toasted.success('Successfully removed.');
        }).catch((err) => {
          this.$toasted.error('Error while removing data. Please try again or reload the page.')
          console.log('Background Info Delte Error: ', err);
        });
    }
  }
}
</script>

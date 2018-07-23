<template>
  <div>
    <ul class="list-unstyled" v-show="ids.length > 0">
      <id-bg-list-item 
        v-for="(idBg, index) in ids" 
        :key="idBg.id" 
        :idBg="idBg"
        @onRemove="onRemove(index, idBg.id)"
        @onUpdate="onUpdate(idBg)"></id-bg-list-item>
    </ul>

	<!--  idBg BACKGROUND -->
		<b-modal id="idBgUpdateModal" ok-only
						ref="idBgUpdateModal"
						title="idBg Background" @ok="idUpdateSubmit">
			<form @submit.stop.prevent="idUpdateSubmit">
					<b-form-group
						label="ID Name:"
						label-for="idName">
						<b-form-input 
						id="idName"
						type="text"
						placeholder="Valid ID"
						v-model="idBg.name"></b-form-input>
					</b-form-group>

					<b-form-group
						label="Number:"
						label-for="number"
					>
					<b-form-input type="text"
					id="number"
					placeholder="Number"
					v-model="idBg.number"></b-form-input>
					</b-form-group>

			</form>
		</b-modal>

    <b-modal 
      id="idConfirmRemoveModal"
      title="Confirm" 
      @ok="idRemoveSubmit">
      Are you sure you want to remove this item?
    </b-modal>
  </div>
</template>


<script>
import IdBgListItem from "./IdBgListItem.vue";
import axios from 'axios';

export default {
  name: 'IdBgList',
  props: {
    ids: Array,
  },
  data() {
    return {
      idBg: {},
      selectedIndex: -1,
    }
  },
  components: {
    IdBgListItem,
  },
  methods: {
    onUpdate(idBg) {
      this.idBg = idBg;
      this.$root.$emit('bv::show::modal','idBgUpdateModal');
    },
    idUpdateSubmit() {
      axios.put('/students/ids', this.idBg)
        .then((response) => {
          this.$toasted.success('Successfully updated.');
        }).catch((err) => {
          this.$toasted.error('Error while updating your background information. Please try again or reload the page.')
          console.log('Background Info Update Error: ', err);
        });
    },
    onRemove(index, id) {
      this.$root.$emit('bv::show::modal','idConfirmRemoveModal');
      this.idBg = {};
      this.idBg.id = id;
      this.selectedIndex = index;
    },
    idRemoveSubmit() {
      axios.delete(`/students/ids/${this.idBg.id}`)
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

<template>
    <div>
    <!-- <b-btn v-b-modal.studentInfo>Student Basic Information</b-btn> -->

    <!-- Modal Component -->
    <b-modal id="studentInfo"
             ref="studentInfoModal"
             title="Welcome to Talentblock!"
			 size="lg"
			 @ok="onOk"
			 @cancel="onCancel">
		<p class="text-primary" >Please fill out the form below.</p>
    	<form>
			<b-form-group id="firstNameGroup"
						  label="First name">
				<b-form-input type="text"
						placeholder="Enter your first name"
						v-model="form.firstName"
						required
						></b-form-input>
			<b-form-group />
			<b-form-group	id="middleNameGroup"
							label="Middle name"
							>
        	<b-form-input type="text"
                      placeholder="Enter your middle name"
                      v-model="form.middleName"
					  required
					  ></b-form-input>
			<b-form-group />
			<b-form-group	id="lastNameGroup"
							label="Last name"
							>
        	<b-form-input type="text"
                      placeholder="Enter your last name"
                      v-model="form.lastName"
					  required
					  ></b-form-input>
			<b-form-group />
			<b-form-group	id="addressGroup"
							label="Address"
							>
        	<b-form-input type="text"
                      placeholder="Enter your address"
                      v-model="form.address"
					  required
					  ></b-form-input>
			<b-form-group />
		</form>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: 'StudentInfoModal',
    data () {
        return {
            form: {
                firstName: '',
                middleName: '',
                lastName: '',
                address: '',
            },
            }
        },
  methods: {

    onOk (evt) {
		// Prevent modal from closing
		// evt.preventDefault()
		
		alert(JSON.stringify(this.form));
		console.log(this.form);
		this.$refs.studentInfoModal.hide()
		// this.onCancel(); 
    },
    onCancel (evt) {
      this.form.firstName = '';
      this.form.middleName = '';
      this.form.lastName = '';
	  this.form.address = '';
	  
    }
  }
}

</script>

<style scoped>

.text-primary{
	/* font-size: 12px; */
	/* color: red; */
	margin-top: -20px !important; 
    margin-bottom: 40px !important;
}
</style>


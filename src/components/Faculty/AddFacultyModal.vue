<template>
    <div>
    <!-- Modal Component -->
    <b-modal id="addFacultyModal"
             ref="addFacultyModal"
             title="Add Faculty"
			 size="lg"
             ok-title="Add"
			 @ok="onOk"
			 @cancel="onCancel">
    	<form>
            <b-row>
                <b-col>
                    <b-form-group id="personnelNameroup"
                                label="Personnel Name">
                        <b-form-input type="text"
                                placeholder="Enter name of personnel"
                                v-model="form.personnelName"
                                required
                                ></b-form-input>
                    <b-form-group />
                    <b-form-group	id="addressGroup"
                                    label="Address"
                                    >
                        <b-form-input type="text"
                                    placeholder="Enter address"
                                    v-model="form.address"
                                    required
                                    ></b-form-input>
                    <b-form-group />
                    <b-form-group	id="contactNoGroup"
                                    label="Contact number"
                                    >
                        <b-form-input type="text"
                                    placeholder="Enter contact number"
                                    v-model="form.contactNo"
                                    required
                                    ></b-form-input>
                    <b-form-group />
                    <b-form-group	id="subjectHandledGroup"
                                    label="Subject Handled"
                                    >
                    <b-form-input type="text"
                                    placeholder="Enter subject handled"
                                    v-model="form.subjectHandled"
                                    required
                                    ></b-form-input>
                    <b-form-group />
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <b-form-group	id="birthdayGroup"
                                            label="Birthday"
                                            >
                                <b-form-input type="text"
                                        placeholder="Enter birthday"
                                        v-model="form.birthday"
                                        required
                                        ></b-form-input>
                            <b-form-group />
                        </b-col>
                        <b-col>
                            <b-form-group	id="ageGroup"
                                            label="Age"
                                            >
                                <b-form-input type="text"
                                        placeholder="Enter age"
                                        v-model="form.age"
                                        required
                                        ></b-form-input>
                            <b-form-group />
                        </b-col>
                    </b-row>
                    <b-form-group	id="personnelBgGroup"
                                    label="Personnel background"
                                    >
                        <b-form-textarea id="textarea1"
                            v-model="form.personnelBg"
                            placeholder="Enter personnel background"
                            rows="8"
                            max-rows="10">
                        </b-form-textarea>
                    <b-form-group />
                </b-col>
            </b-row>
		</form>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: 'AddFacultyModal',
    data () {
        return {
            form: {
                personnelName: '',
                address: '',
                contactNo: '',
                subjectHandled:'',
                birthday: '',
                age: '',
                personnelBg: '',
            },
    
            }
        },
  methods: {

    onOk (evt) {
		console.log(this.form);
		this.$refs.addFacultyModal.hide()
    },
    onCancel (evt) {
        this.form.personnelName = '';
        this.form.address = '';
        this.form.contactNo = '';
        this.form.subjectHandled ='';
        this.form.birthday = '';
        this.form.age = '';
        this.form.personnelBg = '';
	  
    }
  }
}

</script>


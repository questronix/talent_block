<template>
    <div>
    <!-- Modal Component -->
    <b-modal id="updateFacultyModal"
             ref="updateFacultyModal"
             title="Update Faculty"
			 size="lg"
             ok-title="Update"
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
                                <b-form-input type="date"
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
        <div slot="modal-footer">
            <b-btn variant="danger" style="margin-right: 78vh">Remove Faculty</b-btn>
            <b-btn variant="secondary" @click="onCancel">Cancel</b-btn>
            <b-btn variant="primary" @click="onOk">Update</b-btn>
            
       </div>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: 'UpdateFacultyModal',
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
		this.$refs.updateFacultyModal.hide()
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


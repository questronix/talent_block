<template>
    <div>
    <div class="modal fade bd-example-modal-lg" id="updateFacultyModal" tabindex="-1" role="dialog" aria-labelledby="updateFacultyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title label" id="updateFacultyModalLabel">Faculty Personnel Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form novalidate>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="personnel-name" class="col-form-label">Personnel name</label>
                        <input type="text" class="form-control" id="#" value="Jay Tacdoro" placeholder="Name of Personnel" disabled>
                    </div>
                    <div class="form-group">
                        <label for="address" class="col-form-label">Address</label>
                        <input type="text" class="form-control" id="#"  placeholder="Address" required>
                        <div class="invalid-feedback">
                            Please enter a valid address.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="contact-no" class="col-form-label">Contact number</label>
                        <input type="text" class="form-control" id="#"  placeholder="+639-xxx-xxx" required>
                        <div class="invalid-feedback">
                            Please enter a valid contact number.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subj-handled" class="col-form-label">Subject handled</label>
                        <input type="text" class="form-control" id="#"  placeholder="Subject handled" required>
                        <div class="invalid-feedback">
                            Please enter a valid subject.
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="birthday" class="col-form-label">Birthday</label>
                                <input type="text" class="form-control" id="#" placeholder="MM/DD/YYYY" required>
                                <div class="invalid-feedback">
                                    Please enter a valid date.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="age" class="col-form-label">Age</label>
                                <input type="text" class="form-control" id="#" placeholder="Maximum students" required>
                                <div class="invalid-feedback">
                                    Please enter a valid a number.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="personnel-bg" class="col-form-label">Personnel Background</label>
                        <textarea class="form-control" id="#" rows="8" placeholder="Personnel Background" required></textarea>
                        <div class="invalid-feedback">
                            Please enter a valid personnel background.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" style="margin-right:auto">Remove Personnel</button>
                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
            </form>
        </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'UpdateFacultyModal',  
}
</script>

<style scoped>

#updateFacultyModalLabel{
    color: black;
}

.col-form-label{
    color: black !important;
    float: left;
}
</style>


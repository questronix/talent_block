<template>
    <div>
    <div class="modal fade bd-example-modal-lg" id="addCourseModal" tabindex="-1" role="dialog" aria-labelledby="addCourseModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title label" id="exampleModalLabel label">Add Course</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form novalidate>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="course-name" class="col-form-label">Name of course</label>
                        <input type="text" class="form-control" id="#" placeholder="Name of course" required>
                        <div class="invalid-feedback">
                            Please choose a valid course.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="faculty-assigned" class="col-form-label">Faculty assigned</label>
                        <select class="form-control" required>
                            <option>Jay Tacdoro</option>
                        </select>
                        <div class="invalid-feedback">
                            Please choose a valid faculty.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="course-venue" class="col-form-label">Course venue</label>
                        <select class="form-control" required>
                            <option>Comp 302</option>
                        </select>
                        <div class="invalid-feedback">
                            Please choose a valid venue.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="course-schedule" class="col-form-label">Course schedule</label>
                        <select class="form-control" required>
                            <option>14:00 - 16:30</option>
                        </select>
                        <div class="invalid-feedback">
                            Please choose a valid timeslot.
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="course-code" class="col-form-label">Course code</label>
                                <input type="text" class="form-control" id="#" placeholder="Course code" required>
                                <div class="invalid-feedback">
                                    Please enter a valid course code.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="max-students" class="col-form-label">Maximum students</label>
                                <input type="text" class="form-control" id="#" placeholder="Maximum students" required>
                                <div class="invalid-feedback">
                                    Please enter a valid a number.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="course-desc" class="col-form-label">Course description</label>
                        <textarea class="form-control" id="#" rows="8" placeholder="Course description" required></textarea>
                        <div class="invalid-feedback">
                            Please enter a valid description.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Add</button>
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
  name: 'AddCourseModal',  
}
</script>

<style scoped>

.label{
    color: black;
}

.col-form-label{
    color: black !important;
    float: left;
}
</style>


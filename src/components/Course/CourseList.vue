<template>
  <ul>
    <course-list-item v-for="course in courses" :key="course.id" :course="course"></course-list-item>
  </ul>
</template>

<script>
import CourseListItem from '../../components/Course/CourseListItem.vue';

export default {
  name: 'CourseList',
  props: ['courses'],
  components: {
    CourseListItem,
  }
}
</script>


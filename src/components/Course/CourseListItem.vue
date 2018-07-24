<template>
  <li>
    <img :src="course.thumbnail"><br>
    <p>+ {{ course.slot }} students</p>
    <router-link :to="{ path: 'courses/course?id=' + course.id }">
      <h5>{{ course.name}}</h5>
    </router-link>
    <p>{{course.short_desc}}</p>
  </li>
</template>

<script>
export default {
  name: 'CourseListItem',
  props: ['course'],
}
</script>


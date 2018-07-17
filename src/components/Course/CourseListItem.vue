<template>
  <li>
    <img :src="course.imgUrl"><br>
    <p>+ {{ course.count }} students</p>
    <router-link :to="{ name: 'course' }">
      <h5>{{ course.title}}</h5>
    </router-link>
    <p>{{course.desc}}</p>
  </li>
</template>

<script>
export default {
  name: 'CourseListItem',
  props: ['course'],
}
</script>


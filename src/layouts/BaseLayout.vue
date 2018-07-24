<template>
  <div>
    <slot name="header"><NavBar /></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import NavBar from '../components/NavBar/NavBar.vue';

export default {
  name: 'base-layout',
  components: {
    NavBar,
  }
}
</script>


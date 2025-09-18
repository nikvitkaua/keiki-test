<template>
  <div id="app">
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");

    savedTheme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }
}
</script>

<style>

</style>

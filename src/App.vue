<template>
  <div id="app">
    <AppHeader />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");

    savedTheme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }
}
</script>

<style>

</style>

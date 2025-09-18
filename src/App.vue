<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <div class="container">
        <h1 class="title">Facts About Cats To Share With Kids!</h1>
        <div class="tools">
          <FactsSearch />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FactsSearch from '@/components/FactsSearch.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FactsSearch
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");

    savedTheme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }
}
</script>

<style></style>

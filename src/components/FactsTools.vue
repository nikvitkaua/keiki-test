<template>
  <section class="tools">
    <FactsSearch />
    <FactsFilter />
  </section>
</template>

<script>
import FactsSearch from '@/components/FactsSearch.vue';
import FactsFilter from '@/components/FactsFilter.vue';

export default {
  name: 'App',
  components: {
    FactsSearch,
    FactsFilter
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");

    savedTheme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }
}
</script>

<style scoped>
  .tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    .tools {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>

<script>
import FactsSearch from '@/components/FactsSearch.vue';
import FactsFilter from '@/components/FactsFilter.vue';

export default {
  name: 'FactsTools',
  components: { FactsSearch, FactsFilter },
  props: ['search', 'filter'],
  methods: {
    updateSearch(val) {
      this.$emit('update:search', val);
    },
    updateFilter(val) {
      this.$emit('update:filter', val);
    }
  }
}
</script>


<template>
  <section class="tools">
    <FactsSearch :value="search" @input="updateSearch" />
    <FactsFilter :value="filter" @input="updateFilter" />
  </section>
</template>

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

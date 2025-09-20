<script>
import FactsSearch from '@/components/FactsSearch.vue';
import FactsFilter from '@/components/FactsFilter.vue';

export default {
  name: 'FactsTools',
  components: { FactsSearch, FactsFilter },
  props: ['value'],
  methods: {
    updateValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>


<template>
  <section class="tools">
    <FactsSearch :value="value" @input="updateValue" />
    <FactsFilter />
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

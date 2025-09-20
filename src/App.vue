<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <div class="container">
        <section>
          <h1 class="title">Facts About Cats To Share With Kids!</h1>
        </section>

        <FactsTools
          :search="searchText" @update:search="searchText = $event"
          :filter="selectedFilter" @update:filter="selectedFilter = $event"
        />

        <AppFacts :facts="filteredFacts" @load-more="getFacts" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios';

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FactsTools from './components/FactsTools.vue';
import AppFacts from './components/AppFacts.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FactsTools,
    AppFacts
  },

  data() {
    return {
      facts: [],
      page: 1,
      limit: 9,
      totalImages: 9,
      searchText: '',
      selectedFilter: 'All facts',
    };
  },

  computed: {
    filteredFacts() {
      let result = this.facts;

      if (this.searchText) {
        result = result.filter(f => f.fact.toLowerCase().includes(this.searchText.toLowerCase()));
      }

      switch (this.selectedFilter) {
        case 'Show long ones first':
          result = result.slice().sort((a, b) => b.fact.length - a.fact.length);
          break;
        case 'Show short ones first':
          result = result.slice().sort((a, b) => a.fact.length - b.fact.length);
          break;
        case 'Short ones only':
          result = result.filter(f => f.fact.length < 100);
          break;
        case 'Long ones only':
          result = result.filter(f => f.fact.length > 100);
          break;
      }

      return result;
    },
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");
    savedTheme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");

    this.getFacts();
  },

  methods: {
    async getFacts() {
      try {
        const response = await axios.get("https://catfact.ninja/facts", {
          params: {
            limit: this.limit,
            page: this.page,
          },
        });

        const newFacts = response.data.data.map((fact, index) => ({
          ...fact,
          image: `/images/image-${(this.facts.length + index) % this.totalImages + 1}.jpg`,
        }));

        this.facts.push(...newFacts);
        this.page += 1;
      } catch {
        console.error("Error with data")
      }
    }
  }
}
</script>

<style></style>

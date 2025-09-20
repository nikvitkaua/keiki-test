<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <div class="container">
        <section>
          <h1 class="title">Facts About Cats To Share With Kids!</h1>
        </section>

        <FactsTools />

        <AppFacts :facts="facts" @load-more="getFacts" />
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
    };
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

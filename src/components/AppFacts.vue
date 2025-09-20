<script>
  export default {
    name: "AppFacts",
    props: {
      facts: {
        type: Array,
        required: true,
      }
    },
    methods: {
      textClass(fact) {
        return fact.fact.length <= 100 ? 'facts__text--bold' : '';
      }
    }
  };
</script>

<template>
  <section class="facts">
    <ul class="facts__wrapper">
      <li v-for="fact in facts" :key="fact.fact" class="facts__item">
        <a href="dsadas.com/">
          <img :src="fact.image" alt="cat image"  class="facts__img">
          <p :class="['facts__text', textClass(fact)]">{{ fact.fact }}</p>
        </a>
      </li>
    </ul>

    <button @click="$emit('load-more')" class="facts__more">Load more</button>
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  .facts {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 40px 31px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      border-radius: 6px;
      font-size: 16px;
      line-height: 1.4;
      color: $light-theme-text;
      transition: $transition;

      &:hover {
        background-color: $light-theme-violet;
      }
    }

    &__img {
      width: 100%;
      height: auto;
      border-radius: 6px;
      margin-bottom: 24px;
    }

    &__text {
      padding: 16px;
      font-weight: 400;
      font-size: 16px;
      border-radius: 6px;

      &--bold {
        font-size: 24px;
        font-weight: 700;
      }
    }

    &__more {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 310px;
      width: 100%;
      padding: 15px 0;
      color: $light-theme-active;
      font-weight: 600;
      font-size: 18px;
      border: 1px solid $light-theme-active;
      border-radius: 6px;
      margin: 56px auto auto;
      cursor: pointer;
      transition: $transition;

      &:hover {
        background-color: $light-theme-hover-bg;
      }
    }
  }

  body.dark {
    .facts {
      &__item {
        color: $dark-theme-text;

        &:hover {
          background-color: $dark-theme-hover-bg;
        }
      }

      &__more {
        
      }
    }
  }


</style>
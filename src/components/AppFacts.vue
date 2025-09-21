<script>
  export default {
    name: "AppFacts",
    props: {
      facts: {
        type: Array,
        required: true,
      },
      loading: {
        type: Boolean,
        default: true,
      },
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
        <router-link :to="`/fact/${fact.id}`">
          <img :src="fact.image" alt="cat image" class="facts__img">
          <p :class="['facts__text', textClass(fact)]">{{ fact.fact }}</p>
        </router-link>
      </li>
    </ul>

    <div v-if="loading" class="facts__loader">
      <svg width="111" height="115" viewBox="0 0 111 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.8" cx="58.2489" cy="8.52407" r="8.52431" fill="#6E72EC"/>
        <circle opacity="0.7" cx="23.0884" cy="23.0894" r="8.52431" transform="rotate(-45 23.0884 23.0894)" fill="#6E72EC"/>
        <circle opacity="0.6" cx="8.52431" cy="58.2543" r="8.52431" transform="rotate(-90 8.52431 58.2543)" fill="#6E72EC"/>
        <circle opacity="0.5" cx="23.0894" cy="93.4115" r="7.43402" transform="rotate(-135 23.0894 93.4115)" fill="#6E72EC"/>
        <circle opacity="0.4" cx="58.2487" cy="107.973" r="6.25116" fill="#6E72EC"/>
        <circle opacity="0.3" cx="93.4094" cy="93.4099" r="3.81743" transform="rotate(-45 93.4094 93.4099)" fill="#6E72EC"/>
        <circle cx="107.973" cy="58.2493" r="2.55729" transform="rotate(-90 107.973 58.2493)" fill="#D9DAFF"/>
        <circle cx="93.4102" cy="23.0886" r="8.52431" transform="rotate(-135 93.4102 23.0886)" fill="#6E72EC"/>
      </svg>
    </div>

    <button 
      @click="$emit('load-more')"
      :disabled="loading"
      class="facts__more"
    >
      {{ loading ? 'Loading...' : 'Load more' }}
    </button>
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

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    &__loader {
      margin: 30px auto;
      text-align: center;
      svg {
        width: 40px;
        height: 40px;
        border-top-color: $light-theme-active;
        animation: spin 1s linear infinite;
      }
    }

    @keyframes spin {
      100% { transform: rotate(360deg); }
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
    }
  }


</style>
<script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';

  import { factsStore } from '@/store/factsStore';

  export default {
    name: "FactPage",
    components: {
      AppHeader,
      AppFooter,
    },

    data() {
      return {
        fact: null
      }
    },

    created() {
      const factId = this.$route.params.id;
      this.fact = factsStore.getFactById(factId);

      if (!this.fact) {
        this.$router.push('/facts');
      }
    }
  }
</script>

<template>
  <div>
    <AppHeader />

    <main class="main">
      <div class="container">
        <section v-if="fact" class="fact">
          <button @click="$router.push('/facts')" class="fact__back">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3537 1.35378L6.35366 6.35378C6.30723 6.40027 6.25208 6.43715 6.19138 6.46231C6.13068 6.48748 6.06562 6.50043 5.99991 6.50043C5.9342 6.50043 5.86914 6.48748 5.80844 6.46231C5.74774 6.43715 5.6926 6.40027 5.64616 6.35378L0.646162 1.35378C0.552341 1.25996 0.499634 1.13272 0.499634 1.00003C0.499634 0.867352 0.552341 0.740104 0.646162 0.646284C0.739982 0.552463 0.86723 0.499756 0.999912 0.499756C1.13259 0.499756 1.25984 0.552463 1.35366 0.646284L5.99991 5.29316L10.6462 0.646284C10.6926 0.599829 10.7478 0.562978 10.8085 0.537837C10.8692 0.512696 10.9342 0.499756 10.9999 0.499756C11.0656 0.499756 11.1307 0.512696 11.1914 0.537837C11.2521 0.562978 11.3072 0.599829 11.3537 0.646284C11.4001 0.692739 11.437 0.747889 11.4621 0.808586C11.4873 0.869282 11.5002 0.934336 11.5002 1.00003C11.5002 1.06573 11.4873 1.13079 11.4621 1.19148C11.437 1.25218 11.4001 1.30733 11.3537 1.35378Z" fill="currentColor"/>
            </svg>
            <span>Back</span>
          </button>
          <div class="fact__container">
            <img :src="fact.image" alt="fact image" />
            <p>{{ fact.fact }}</p>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/scss/main.scss";

  .fact {
    position: relative;
    padding: 54px 0;

    &__back {
      position: absolute;
      left: 0;
      top: -24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      color: $light-theme-text;
      font-weight: 400;
      font-size: 16px;
      transition: $transition;

      svg {
        transform: rotate(90deg);
        color: $light-theme-text;
        width: 16px;
        height: 9px;
        transition: $transition;
      }

      &:hover {
        opacity: .8;
      }
    }

    &__container {
      max-width: 855px;
      margin: 0 auto; 
    }

    img {
      margin-bottom: 42px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  body.dark {
    .fact {
      &__back {
        color: $dark-theme-text;

        svg {
          color: $dark-theme-text;
        }
      }
    }
  }
</style>
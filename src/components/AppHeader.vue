<script>
  import ThemeToggler from '@/components/ThemeToggler.vue'

  export default {
    name: "AppHeader",
    components: {
      ThemeToggler
    }
  }
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="/icons/logo.svg" alt="Cats logo">
        </div>

        <div class="header__info">
          <ThemeToggler />
          
          <!-- Тут можна було б зробити кнопку взаємодії з акаунтом (logout, email, settings etc.) -->
          <div class="account">A</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  .header {
    background-color: $light-theme-violet;
    transition: $transition;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 0;
    }

    &__logo {
      max-width: 185px;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }

  body.dark {
    .header {
      background-color: $dark-theme-violet;
    }
  }

  .account {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 100%;
    background-color: #636AF2;
    color: #FFFFFF;
  }
</style>
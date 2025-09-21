<script>
  import ThemeToggler from '@/components/ThemeToggler.vue'

  export default {
    name: "AppHeader",
    components: {
      ThemeToggler
    },

    data() {
      return {
        showDropdown: false
      };
    },

    computed: {
      isAuthenticated() {
        return localStorage.getItem("auth") === "true";
      },
      username() {
        return localStorage.getItem('username' || '');
      }
    },

    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      logout() {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        this.showDropdown = false;
        this.$router.push('/login');
      }
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
          
          <div v-if="isAuthenticated" @click="toggleDropdown" class="account">
            {{ username.charAt(0).toUpperCase() }}

            <ul v-show="showDropdown">
              <li @click="logout">Log out</li>
            </ul>
          </div>
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
      position: relative;
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
    background-color: $light-theme-active;
    color: $light-theme-background;
    cursor: pointer;

    ul {
      position: absolute;
      left: 0;
      bottom: -80px;
      width: 148px;

      li {
        padding: 16px 12px;
        font-weight: 400;
        font-size: 16px;
        background-color: $light-theme-violet;
        color: $light-theme-text;
        cursor: pointer;
        border-radius: 6px;
      }
    }
  }
</style>
<script>
  export default {
    name: 'ThemeToggler',
    data() {
      return {
        isDark: false,
      };
    },
    mounted() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        this.isDark = true;
        document.body.classList.add("dark");
      }
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;

        if (this.isDark) {
          document.querySelector("body").classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.querySelector("body").classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }
    }
  }
</script>

<template>
  <button @click="toggleTheme" class="toggler">
    <img src="/icons/moon.svg" alt="moon">
    <img src="/icons/sun.svg" alt="sun">
  </button>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  .toggler {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 37px;
    padding: 5px;
    overflow: hidden;
    background-color: $light-theme-background;
    border-radius: 30px;
    box-shadow: 0px 0px 5px 0px #636AF233;
    transition: $transition;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 7px;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      border-radius: 30px;
      background-color: #888888;
      transition: $transition;
    }
  }

  body.dark {
    .toggler {
      background-color: $dark-theme-background;

      &:before {
        left: 48px;
      }
    }
  }
</style>
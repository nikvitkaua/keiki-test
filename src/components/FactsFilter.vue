<script>
  export default {
    name: "FactsFilter",
    data() {
      return {
        options: [
          "All facts",
          "Show long ones first",
          "Show short ones first",
          "Short ones only",
          "Long ones only",
        ],
        selected: "All facts",
        isOpen: false,
      };
    },
    methods: {
      selectOption(option) {
        this.selected = option;
        this.isOpen = false;
      },
    },
  };
</script>

<template>
  <div class="facts-filter" :class="{ open: isOpen }">
    <svg width="16" height="9" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3537 1.35378L6.35366 6.35378C6.30723 6.40027 6.25208 6.43715 6.19138 6.46231C6.13068 6.48748 6.06562 6.50043 5.99991 6.50043C5.9342 6.50043 5.86914 6.48748 5.80844 6.46231C5.74774 6.43715 5.6926 6.40027 5.64616 6.35378L0.646162 1.35378C0.552341 1.25996 0.499634 1.13272 0.499634 1.00003C0.499634 0.867352 0.552341 0.740104 0.646162 0.646284C0.739982 0.552463 0.86723 0.499756 0.999912 0.499756C1.13259 0.499756 1.25984 0.552463 1.35366 0.646284L5.99991 5.29316L10.6462 0.646284C10.6926 0.599829 10.7478 0.562978 10.8085 0.537837C10.8692 0.512696 10.9342 0.499756 10.9999 0.499756C11.0656 0.499756 11.1307 0.512696 11.1914 0.537837C11.2521 0.562978 11.3072 0.599829 11.3537 0.646284C11.4001 0.692739 11.437 0.747889 11.4621 0.808586C11.4873 0.869282 11.5002 0.934336 11.5002 1.00003C11.5002 1.06573 11.4873 1.13079 11.4621 1.19148C11.437 1.25218 11.4001 1.30733 11.3537 1.35378Z" fill="currentColor"/>
    </svg>
    <button class="select" @click="isOpen = !isOpen">
      {{ selected }}
    </button>
    <ul v-if="isOpen" class="select-list">
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        :class="{ active: option === selected }"
      >
        {{ option }}

        <svg
          v-if="option === selected"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5307 7.28062L9.53068 19.2806C9.46102 19.3503 9.3783 19.4057 9.28726 19.4434C9.19621 19.4812 9.09861 19.5006 9.00005 19.5006C8.90149 19.5006 8.80389 19.4812 8.71285 19.4434C8.6218 19.4057 8.53908 19.3503 8.46943 19.2806L3.21943 14.0306C3.0787 13.8899 2.99963 13.699 2.99963 13.5C2.99963 13.301 3.0787 13.1101 3.21943 12.9694C3.36016 12.8286 3.55103 12.7496 3.75005 12.7496C3.94907 12.7496 4.13995 12.8286 4.28068 12.9694L9.00005 17.6897L20.4694 6.21936C20.6102 6.07863 20.801 5.99957 21.0001 5.99957C21.1991 5.99957 21.3899 6.07863 21.5307 6.21936C21.6714 6.36009 21.7505 6.55097 21.7505 6.74999C21.7505 6.94901 21.6714 7.13988 21.5307 7.28062Z"
            fill="currentColor"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  .facts-filter {
    position: relative;
    display: inline-block;

    .select {
      padding: 12px 16px;
      min-width: 300px;
      appearance: none;
      background-color: $light-theme-violet;
      border-radius: 6px;
      font-size: 16px;
      color: $light-theme-text;
      transition: $transition;
      cursor: pointer;
      text-align: left;
    }

    > svg {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%) rotate(0deg);
      color: $light-theme-text;
      transition: transform $transition;
      pointer-events: none;
    }

    .select-list {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      width: 100%;
      background: $light-theme-violet;
      border-radius: 6px;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: $transition;

      li {
        padding: 12px 16px;
        cursor: pointer;
        color: $light-theme-text;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: $transition;

        &:hover {
          background-color: $light-theme-hover-bg;
        }

        &.active {
          color: $light-theme-active;
        }
      }
    }

    &.open {
      .select-list {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      > svg {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  body.dark {
    .facts-filter {
      .select {
        background-color: $dark-theme-violet-bg;
        color: $dark-theme-text;
      }

      .select-list {
        background: $dark-theme-violet-bg;

        li {
          color: $dark-theme-gray;

          &.active {
            color: $dark-theme-text;
          }

          &:hover {
            background: $dark-theme-hover-bg;
          }
        }
      }

      > svg {
        color: $dark-theme-text;
      }
    }
  }

</style>
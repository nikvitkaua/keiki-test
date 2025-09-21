<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      name: '',
      error: '',
    };
  },

  watch: {
    name(value) {
      this.validateName(value);
    },
  },

  methods: {
    validateName(name) {
      if (!name) {
        this.error = 'Enter your name';
        return false;
      }
      if (name.length < 3 || name.length > 15) {
        this.error = 'Name must be 3-15 characters';
        return false;
      }
      if (/[^A-Za-z]/.test(name)) {
        this.error = 'Only Latin letters allowed';
        return false;
      }
      this.error = '';
      return true;
    },
    submitForm(e) {
      e.preventDefault();

      if (!this.name) {
        this.error = 'Enter your name';
        return;
      }

      if (!this.validateName(this.name)) {
        this.error = 'Name must be 3-15 letters (A-Z, a-z)';
        return;
      }

      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', this.name);

      this.$router.push('/facts');
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <form @submit="submitForm" id="loginForm">
        <label for="name"> Name
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your name"
            v-model="name"
            :class="{'input--error': error}"
          >
          <span v-if="error" class="error-message">{{ error }}</span>
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";

  #loginForm {
    width: 100%;
    max-width: 410px;
    margin: 0 auto;

    label {
      display: block;
      font-weight: 500;
      font-size: 16px;
      color: $light-theme-text;
      margin-bottom: 48px;
    }

    input {
      display: block;
      width: 100%;
      padding: 12px 16px;
      background-color: $light-theme-violet;
      border-radius: 6px;
      font-size: 16px;
      color: $light-theme-text;
      transition: $transition;
      border: 1px solid $light-theme-violet;

      &:focus {
        border: 1px solid $light-theme-active;
      }

      &--error {
        border: 1px solid $error-color;
      }
    }

    button {
      background-color: $light-theme-active;
      cursor: pointer;
      width: 224px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: $light-theme-background;
      padding: 15px 0;
      border-radius: 6px;
      transition: $transition;
      margin: 0 auto;

      &:hover {
        background-color: $light-theme-hover-bg;
        color: $light-theme-active;
      }
    }

    .error-message {
      color: $error-color;
      font-weight: 400;
      font-size: 14px;
    }
  }

  body.dark {
    #loginForm {
      input {
        background-color: $dark-theme-violet-bg;
        color: $dark-theme-text;
      }

      input::placeholder {
        color: $dark-theme-placeholder;
      }
    }
  }
</style>
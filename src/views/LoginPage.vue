<script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import LoginForm from '@/components/LoginForm.vue';

  export default {
    name: "LoginPage",
    components: {
      AppHeader,
      AppFooter,
      LoginForm,
    }
  }
</script>

<template>
  <div>
    <AppHeader />

    <main class="main">
      <h1 class="title title--login">Log in</h1>
      <LoginForm />
    </main>

    <AppFooter />
  </div>
</template>

<style></style>
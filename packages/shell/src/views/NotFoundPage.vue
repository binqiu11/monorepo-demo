<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Page not found.</p>
    <RouterLink to="/nomad">Back to app</RouterLink>
  </section>
</template>

<script setup lang="js">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.not-found {
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 20px;
  background: #fff1f2;
}
</style>

<template>
  <section class="nomad-card">
    <h2>Nomad Home</h2>
    <p>Nomad package exports this page component directly.</p>
    <Button @click="increment">
      Shared Button ({{ count }})
    </Button>
  </section>
</template>

<script setup lang="js">
import { Button } from "@unifid-portal/shared/components";
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value += 1;
}
</script>

<style scoped>
.nomad-card {
  border: 1px solid #86efac;
  border-radius: 8px;
  padding: 16px;
  background: #f0fdf4;
}
</style>

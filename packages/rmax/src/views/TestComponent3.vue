<template>
  <div :style="{ border: '1px solid gray', padding: '8px' }">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref<string>("RMax Component Test 3");
</script>

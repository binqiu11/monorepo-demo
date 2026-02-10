<template>
  <div :style="{ border: '1px solid red', padding: '8px' }">
    A1 Component Test
    <TestComponent1 />
    <br />
    <TestComponent4 />
    <br />
    <Button>Shared Button Component</Button>
  </div>
</template>

<script setup lang="js">
import { TestComponent1, foo, TestComponent4 } from '@packages/rmax';
import Button from '@packages/shared/components/Button.vue';
import { onMounted } from 'vue';

onMounted(() => {
  foo();
});
</script>

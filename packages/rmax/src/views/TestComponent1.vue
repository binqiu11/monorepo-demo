<template>
  <div :style="{ border: '1px solid gray', padding: '8px' }">
    <p>{{ text }}</p>
    <p>Count from pinia : {{ testStore.count }}</p>
    <Button @click="testStore.addCount">Add</Button>
    <Button @click="testStore.increaseCount">Increase</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@unifid-protal/shared/components';
import { useTestStore } from '@/stores/test';

const testStore = useTestStore();

const text = ref<string>('RMax Component Test 1');
</script>

<template>
  <div class="border border-blue-500 p-2 heading-xl">
    <p>{{ text }}</p>
    <p>Count from pinia : {{ testStore.count }}</p>
    <Button @click="testStore.addCount">
      Add
    </Button>
    <Button @click="testStore.increaseCount">
      Increase
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@unifid-portal/shared/components";
import { ref } from "vue";
import { useTestStore } from "@/stores/test";

const testStore = useTestStore();

const text = ref<string>("RMax Component Test 1");
</script>

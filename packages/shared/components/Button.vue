<template>
  <button
    class="body-s"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="js">
const emit = defineEmits(["click"]);
</script>

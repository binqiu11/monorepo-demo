<template>
  <div ref="innerReact" :style="{ border: '1px solid gray', padding: '8px' }"></div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, onUnmounted, ref, watch } from 'vue';

import { renderReactComponent, type InnerReactComponentProps } from './InnerReactComponent';
import { unmountComponentAtNode } from 'react-dom';

const props = defineProps<InnerReactComponentProps>();

const emit = defineEmits<{
  (e: 'back'): void;
}>();

const innerReact = ref<HTMLDivElement>();
const instance = getCurrentInstance();

onMounted(() => {
  console.log('(instance?.refs as any).', instance, instance?.refs);
  if (innerReact.value) {
    renderReactComponent(innerReact.value, props);
  }
});

onUnmounted(() => {
  innerReact.value && unmountComponentAtNode(innerReact.value);
});

watch(props, () => {
  if (innerReact.value) {
    renderReactComponent(innerReact.value, props);
  }
});
</script>

<template>
  <div ref="innerReact" :style="{ border: '1px solid gray', padding: '8px' }" />
</template>

<script lang="ts" setup>
import type { InnerReactComponentProps } from "./InnerReactComponent";

import { unmountComponentAtNode } from "react-dom";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { renderReactComponent } from "./InnerReactComponent";

const props = defineProps<InnerReactComponentProps>();

const innerReact = ref<HTMLDivElement>();

onMounted(() => {
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

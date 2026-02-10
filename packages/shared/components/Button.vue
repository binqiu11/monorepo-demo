<template>
	<button @click="emit('click')">
		<slot></slot>
	</button>
</template>

<script setup lang="js">
import { ref } from "vue";

const emit = defineEmits(['click'])

const hovered = ref(false);
</script>

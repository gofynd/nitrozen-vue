<script setup>
import { ref } from 'vue';

const themeProp = defineProps({
  theme: {
    type: String,
    default: 'primary', // Set default theme
  },
});

const theme = ref(themeProp.theme); // Use ref for reactive data

const classes = computed(() => {
  return [
    'n-flat-button',
    theme.value === 'secondary' ? 'n-flat-button-secondary' : '',
    theme.value === 'destructive' ? 'n-flat-button-destructive' : '',
  ];
});
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

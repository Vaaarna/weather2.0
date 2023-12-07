<script setup>
import { ref } from 'vue'

const props = defineProps({
  wind_speed: Number,
  wind_direction: Number
})

</script>

<template>
  <p>wimddddIcon: {{wind_speed}} as a </p>
</template>

<style></style>
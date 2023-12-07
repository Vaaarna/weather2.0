<script setup>
import { ref } from 'vue'

const props = defineProps({
    feels_like: Number,
    precipitation: Number,
    wind_speed: Number,
    wind_direction: Number,

})

</script>

<template>
    <p>feelslike
        precipitation
        wind</p>
</template>

<style></style>
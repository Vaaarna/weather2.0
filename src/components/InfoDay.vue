<script setup>
import { ref } from 'vue'

const props = defineProps({
    precipitation: Number,
    wind_speed: Number,
    wind_direction: Number,

})

</script>

<template>
    <p>precipitation: {{precipitation}}%</p>
    <p>wind: {{wind_speed}} km/h {{wind_direction}}</p>
</template>

<style scoped>
p {
    font-size: 80%;
    text-align: left;
    display: inline-block;

}
</style>
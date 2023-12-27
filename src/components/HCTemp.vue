<script setup>
import { ref } from 'vue'


const props = defineProps({
    temp: Number,
})

var roundTemp = Math.round(props.temp)

</script>

<template>
    <div class="temp">{{ roundTemp }}°C</div>
</template>

<style scoped>
.temp {
    font-size: 140%;
}
</style>
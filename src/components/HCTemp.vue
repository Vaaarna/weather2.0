<script setup>
import { ref , computed } from 'vue'


const props = defineProps({
    temp: Number,
})
const roundTemp = computed(()=>Math.round(props.temp))
// var roundTemp = Math.round(props.temp)

</script>

<template>
    <div class="tempContainer">
        <div class="temp">{{ roundTemp }}°C</div>
    </div>
</template>

<style scoped>
.tempContainer {
    width: 15%;
    container-type: inline-size;
}
.temp {
    font-size: 25cqw;
}
</style>
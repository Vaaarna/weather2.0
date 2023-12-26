<script setup>
import { ref } from 'vue'

const props = defineProps({
    weather_code: Number,
})

</script>
<!-- make it so depending on the incoming number shows the correct icon -->
<template>
    <div> <img src="../assets/icons/cloud.png" alt="weatherIcon"></div>
</template>

<style scoped>
img {
    width:70px;
    padding: 7px;
}
</style>
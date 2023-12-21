<script setup>
import { ref } from 'vue'
// import {allDays} from 'C:/vueCounter123/src/App.vue'

const props = defineProps({
    date: Date,
})

</script>

<template>
    <div> {{date.getDate()}}. {{date.getDay()}}</div>
</template>

<style></style>
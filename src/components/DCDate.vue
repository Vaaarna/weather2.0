<script setup>
import { ref } from 'vue'

const props = defineProps({
    date: Date,
})

const dayNames = new Map([
    [1, "pirmdiena"],
    [2, "otrdiena"],
    [3, "trešdiena"],
    [4, "ceturdiena"],
    [5, "piektdiena"],
    [6, "sestdiena"],
    [0, "svētdiena"],
]);

</script>

<template>
    <div> {{date.getDate()}}. {{dayNames.get(date.getDay())}}</div>
</template>

<style></style>
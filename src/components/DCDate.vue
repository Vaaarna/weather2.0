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
    <div class="dateContainerDiv">
        <div class="date">{{ date.getDate() }}. </div>
        <div class="weekday"> {{ dayNames.get(date.getDay()) }}</div>
    </div>
</template>

<style scoped>
.dateContainerDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 5px;
}

.date {
    font-size: 170%;
}


</style>
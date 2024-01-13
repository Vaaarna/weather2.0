<script setup>
import { ref } from 'vue'

const props = defineProps({
    time: Date
})

</script>

<template>
    <div class="timeDiv">
        <div class="time">
            {{ time.getHours() }}
        </div>
        <div class="zeros">00</div>
    </div>
</template>

<style scoped>
.timeDiv {
    display: flex;
    padding: 5px;

    width: 15%;
    container-type: inline-size;
}
.time {
    font-size: 40cqw;
}

.zeros {
    font-size: 20cqw;
}
</style>
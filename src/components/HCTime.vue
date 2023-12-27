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
    
}
.time {
    font-size: 150%;
}

.zeros {
    font-size: 80%;
}
</style>
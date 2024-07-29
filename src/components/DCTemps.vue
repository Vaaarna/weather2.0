<script setup>
import { ref, computed } from 'vue'


const props = defineProps({
    temp_min: Number,
    temp_max: Number,
})

const roundMinTemp = computed(() => Math.round(props.temp_min))
const roundMaxTemp = computed(() => Math.round(props.temp_max))

</script>

<template>
    <div class="TempContainerDiv">
        <div class="MinMax">{{ roundMaxTemp }}°C</div>
        <div class="MinMax">{{ roundMinTemp }}°C</div>
    </div>
</template>

<style scoped>
.TempContainerDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 3px;

    width: 15%;
    container-type: inline-size;
}

.MinMax {
    font-size: 37cqw;
}
</style>
<script setup>
import { ref } from 'vue'


const props = defineProps({
    temp_min: Number,
    temp_max: Number,
})

var roundMinTemp = Math.round(props.temp_min)
var roundMaxTemp = Math.round(props.temp_max)


</script>

<template>
    <div class="TempContainerDiv">
        <div class="MinMax">{{roundMaxTemp}}°C</div>
        <div class="MinMax">{{roundMinTemp}}°C</div>
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
<script setup>
import { ref , computed} from 'vue'

const props = defineProps({
    precipitation: Number,
    wind_speed: Number,
    wind_direction: Number,

})
function windDir(i) {
    if (i <= 23) {
        i = "Z "; //🡣"
    } else if (i <= 68) {
        i = "ZA "; //🡧"
    } else if (i <= 113) {
        i = "A  "; //🡠"
    } else if (i <= 158) {
        i = "DA "; //🡤 "
    } else if (i <= 203) {
        i = "D  "; //🡡"
    } else if (i <= 248) {
        i = "DR "; //🡥"
    } else if (i <= 293) {
        i = "R "; //🡢"
    } else if (i <= 338) {
        i = "ZR "; //🡦"
    } else if (i <= 360) {
        i = "Z "; //🡣"
    }
    return i;
}

// var roundWindSpeed = Math.round(props.wind_speed)
const roundWindSpeed = computed(()=>Math.round(props.wind_speed))

</script>

<template>
    <div class="smallInfoDiv">
        <div class="infoLine">precipitation: {{ precipitation }}%</div>
        <div class="infoLine">wind: {{ roundWindSpeed }} km/h {{ windDir(wind_direction) }}</div>
    </div>
</template>

<style scoped>
.smallInfoDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    width: 15%;
    container-type: inline-size;
}

.infoLine {
    text-align: left;
    white-space: nowrap;
    font-size: 17cqw;
}
</style>
<script setup>
import { ref } from 'vue'
import { WeatherDay, WeatherHour, OverView } from "../functions";
import DateC from "./DateC.vue";
import WeatherIconInfo from "./WeatherIconInfo.vue";
import InfoDay from "./InfoDay.vue";

const props = defineProps({
    day_obj: WeatherDay
})

const expanded = ref(false)

function toggle() {
    expanded.value = !expanded.value
}
</script>

<template>
    <div class="dayCont" @click="toggle">
        <DateC :date="day_obj.dayOverview.time"></DateC>
        <WeatherIconInfo :weather_code="day_obj.dayOverview.weathercode"> </WeatherIconInfo>
        <InfoDay :precipitation="day_obj.dayOverview.precipitation" :wind_direction="day_obj.dayOverview.wind_dir"
            :wind_speed="day_obj.dayOverview.wind_speed"></InfoDay>
        <div v-if="expanded">↟</div>
        <div v-else>↡</div>
    </div>
    <div class="hourCont" v-if="expanded">
        <div>
            5am
        </div>
        <div>
            6am
        </div>
        <div>
            7am
        </div>
    </div>
</template>

<style>

div {
    text-align: center;
    align-items: center;

}
.oneDAyContainer {
    display: flex;
    flex-direction: column;
    background-color: rgb(72, 212, 212);
}

.dayCont {
    display: flex;
    background-color: rgb(23, 182, 182);
    padding: 7px;
}

.hourCont {
    background-color: rgb(31, 103, 236);
    display: flex;
    flex-direction: column;
    gap: 1vh;
}
</style>
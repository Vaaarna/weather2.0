<script setup>
import { ref } from 'vue'
import { WeatherDay, WeatherHour, OverView } from "../functions";
import DCDate from "./DCDate.vue";
import DCWeatherIcon from "./DCWeatherIcon.vue";
import DCSmallInfo from "./DCSmallInfo.vue";
import DCWindIcon from './DCWindIcon.vue';

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
        <DCDate :date="day_obj.dayOverview.time"></DCDate>
        <DCWeatherIcon :weather_code="day_obj.dayOverview.weathercode"> </DCWeatherIcon>
        <DCSmallInfo :precipitation="day_obj.dayOverview.precipitation" :wind_direction="day_obj.dayOverview.wind_dir"
            :wind_speed="day_obj.dayOverview.wind_speed"></DCSmallInfo>
        <DCWindIcon :wind_speed="day_obj.dayOverview.wind_speed" :wind_direction="day_obj.dayOverview.wind_dir"></DCWindIcon>
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
    background-color: rgb(89, 221, 221);
    padding: 7px;
}

.hourCont {
    background-color: rgb(31, 103, 236);
    display: flex;
    flex-direction: column;
    gap: 1vh;
}
</style>
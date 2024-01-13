<script setup>
import { ref } from 'vue'
import { WeatherHour } from "../functions";
import HCTime from "./HCTime.vue"
import WeatherIcon from './WeatherIcon.vue';
import HCTemp from './HCTemp.vue';
import HCSmallInfo from './HCSmallInfo.vue';
import WindIcon from './WindIcon.vue';

const props = defineProps({
    hour_obj: WeatherHour
})

const expanded = ref(false)

var dayORnight = ""
    if (props.hour_obj.is_day == true) {
       dayORnight = "dayC";
    } else {
        dayORnight = "nightC";
    }
</script>

<template>
    <div  :class="dayORnight" class="OneHourDiv">
        <HCTime :time="hour_obj.time"></HCTime>
        <WeatherIcon class="icons" :isDay="Boolean(hour_obj.is_day)" :weather_code="hour_obj.weathercode"></WeatherIcon>
        <HCTemp :temp="hour_obj.temp"></HCTemp>
        <HCSmallInfo :temp_apparent="hour_obj.temp_app" :precipitation="hour_obj.precipitation" :wind_speed="hour_obj.wind_speed" :wind_direction="hour_obj.wind_dir"></HCSmallInfo>
        <WindIcon class="icons" :wind_speed="hour_obj.wind_speed" :wind_direction="hour_obj.wind_dir"></WindIcon>
    </div>
</template>

<style scoped>

.icons{
    width: 15%;
}

.OneHourDiv{
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin:3px;
    border-radius: 10px;
    
}
.dayC {
    background-color: rgb(101, 209, 209);
    color: rgb(18, 38, 80);
}
.nightC {
    background-color: rgb(33, 49, 87);
    color: aliceblue;
}
</style>
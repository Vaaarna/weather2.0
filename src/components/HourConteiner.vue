<script setup>
import { ref } from 'vue'
import { WeatherDay, WeatherHour, OverView } from "../functions";
import HCTime from "./HCTime.vue"
import HCWeatherIcon from './HCWeatherIcon.vue';
import HCTemp from './HCTemp.vue';
import HCSmallInfo from './HCSmallInfo.vue';
import HCWindIcon from './HCWindIcon.vue';

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
        <HCWeatherIcon :is_Day="hour_obj.is_day" :weather_code="hour_obj.weathercode"></HCWeatherIcon>
        <HCTemp :temp="hour_obj.temp"></HCTemp>
        <HCSmallInfo :temp_apparent="hour_obj.temp_app" :precipitation="hour_obj.precipitation" :wind_speed="hour_obj.wind_speed" :wind_direction="hour_obj.wind_dir"></HCSmallInfo>
        <HCWindIcon :wind_speed="hour_obj.wind_speed" :wind_direction="hour_obj.wind_dir"></HCWindIcon>
    </div>
</template>

<style scoped>
.OneHourDiv{
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding: 7px;

}
.dayC {
    background-color: rgb(139, 188, 192);
    color: rgb(18, 38, 80);
}
.nightC {
    background-color: rgb(18, 38, 80);
    color: aliceblue;
}
</style>
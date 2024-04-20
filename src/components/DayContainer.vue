<script setup>
import { ref } from 'vue'
import { WeatherDay } from "../functions";
import DCDate from "./DCDate.vue";
import WeatherIcon from "./WeatherIcon.vue";
import DCSmallInfo from "./DCSmallInfo.vue";
import WindIcon from './WindIcon.vue';
import DCTemps from './DCTemps.vue';
import HourConteiner from './HourConteiner.vue';

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
        <WeatherIcon  :isDay="true" :weather_code="day_obj.dayOverview.weathercode"></WeatherIcon>
        <DCTemps :temp_min="day_obj.dayOverview.temp_min" :temp_max="day_obj.dayOverview.temp_max"></DCTemps>
        <DCSmallInfo :precipitation="day_obj.dayOverview.precipitation" :wind_direction="day_obj.dayOverview.wind_dir"
            :wind_speed="day_obj.dayOverview.wind_speed"></DCSmallInfo>
        <WindIcon :wind_speed="day_obj.dayOverview.wind_speed" :wind_direction="day_obj.dayOverview.wind_dir">
        </WindIcon>
        <div class="expander" v-if="expanded">↟</div>
        <div class="expander" v-else>↡</div>
    </div>
    <div class="hoursCont" v-if="expanded">
        <HourConteiner  v-for="hour of day_obj.hours" :hour_obj="hour"></HourConteiner>
    </div>
</template>

<style scoped>
.dayCont {
    align-items: center;
    display: flex;
    justify-content: space-around;
    background-color: rgb(101, 209, 209);
    padding: 7px;
    border-radius: 5px;
  

}

.hoursCont {
    /* size: 80%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x:scroll ;
    overflow-y:scroll;
   
}

.expander {
    font-size: 130%;
}

</style>
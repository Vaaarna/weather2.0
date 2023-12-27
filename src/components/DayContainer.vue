<script setup>
import { ref } from 'vue'
import { WeatherDay, WeatherHour, OverView } from "../functions";
import DCDate from "./DCDate.vue";
import DCWeatherIcon from "./DCWeatherIcon.vue";
import DCSmallInfo from "./DCSmallInfo.vue";
import DCWindIcon from './DCWindIcon.vue';
import DCTemps from './DCTemps.vue';

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
        <DCWeatherIcon :weather_code="day_obj.dayOverview.weathercode"></DCWeatherIcon>
        <DCTemps :temp_min="day_obj.dayOverview.temp_min" :temp_max="day_obj.dayOverview.temp_max"></DCTemps>
        <DCSmallInfo :precipitation="day_obj.dayOverview.precipitation" :wind_direction="day_obj.dayOverview.wind_dir"
            :wind_speed="day_obj.dayOverview.wind_speed"></DCSmallInfo>
        <DCWindIcon :wind_speed="day_obj.dayOverview.wind_speed" :wind_direction="day_obj.dayOverview.wind_dir"></DCWindIcon>
        <div class="expander" v-if="expanded">↟</div>
        <div class="expander" v-else>↡</div>
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

<style scoped>

.dayCont {
    align-items: center;

    display: flex;
    justify-content: space-around;
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
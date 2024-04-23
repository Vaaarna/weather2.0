<script setup>

const props = defineProps({
    weather_code: Number,
    isDay: Boolean,
})
const WeatherCodeMap = new Map([
    [0, { name: "sun.png", alt: "Clear sky" }],
    [1, { name: "sun Mainly clear.png", alt: "Mainly clear" }],
    [2, { name: "sun partly cloudy.png", alt: "partly cloudy" }],
    [3, { name: "overcast.png", alt: "overcast" }],

    [45, { name: "fog.png", alt: "fog" }],
    [48, { name: "fog depositing rime copy.png", alt: "depositing rime fog " }],

    [51, { name: "drizzling.png", alt: "light drizzle" }],
    [53, { name: "drizzling moderate.png", alt: "moderate drizzle" }],
    [55, { name: "drizzling dense.png", alt: "dense drizzle" }],

    [56, { name: "frozen drizzle.png", alt: "light freezing drizzle" }],
    [57, { name: "dense frozen drizzle.png", alt: "dense freezing drizzle" }],

    [61, { name: "rain.png", alt: "slight rain" }],
    [63, { name: "rain moderate .png", alt: "moderate rain" }],
    [65, { name: "rain heavy.png", alt: "heavy  rain" }],

    [66, { name: "rain freezing.png", alt: "Light freezing rain" }],
    [67, { name: "rain freezing heavy.png", alt: "heavy intensity freezing rain" }],

    [71, { name: "snow light.png", alt: "Slight snow fall" }],
    [73, { name: "snow moderate.png", alt: "moderate snow fall" }],
    [75, { name: "snow heavy.png", alt: "heavy intensity snow fall" }],

    [77, { name: "snow moderate.png", alt: "Snow grains" }],

    [80, { name: "rain showers.png", alt: "slight rain showers" }],
    [81, { name: "rain showers moderate.png", alt: "moderate rain showers" }],
    [82, { name: "rain showers heavy.png", alt: "violent rain showers" }],

    [85, { name: "snow showers light.png", alt: "slight snow showers" }],
    [86, { name: "snow showers heavy.png", alt: "heavy snow showers" }],

    [95, { name: "thunderstorm.png", alt: "Thunderstorm" }],

    [96, { name: "thunderstorm slight hail.png", alt: "Thunderstorm with slight hail" }],
    [99, { name: "thunderstorm heavyhail.png", alt: "Thunderstorm with heavy hail" }],
])
var weather_obj
// make a question mark weather png
if (!WeatherCodeMap.has(props.weather_code)) {
    weather_obj = { name: "cloud.png", alt: "weather icon uNKNOWN DIE" }
} else {
    weather_obj = WeatherCodeMap.get(props.weather_code)

    if (props.isDay == false) {
        if (props.weather_code == 0) {
            weather_obj = { name: "moon clear.png", alt: "clear" }
        } else if (props.weather_code == 1) {
            weather_obj = { name: "moon mainly clear.png", alt: "mainly clear" }
        } else if (props.weather_code == 2) {
            weather_obj = { name: "moon partly cloudy.png", alt: "partly cloudy" }
        }
    }

}
const weatherIconURL = new URL(`../../public/${weather_obj.name}`, import.meta.url).href;
</script>

<template>
   
    <img v-bind:src="weatherIconURL" v-bind:alt="'weather icon:' + weather_obj.alt">
</template>

<style scoped>
img {
    width: 15%;
    padding: 5px;
}
</style>
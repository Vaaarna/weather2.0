<script setup>

const props = defineProps({
    weather_code: Number,
    isDay: Boolean,
})
const WeatherCodeMap = new Map([
    [0, { name: "sun.png", alt: "Clear sky" }],
    [1, { name: "sunpartlycloudy.png", alt: "Mainly clear" }],
    [2, { name: "sunmostcloudy.png", alt: "partly cloudy" }],
    [3, { name: "cloud.png", alt: "overcast" }],

    [45, { name: "cloud.png", alt: "fog" }],
    [48, { name: "cloud.png", alt: "depositing rime fog " }],

    [51, { name: "drizzling.png", alt: "light drizzle" }],
    [53, { name: "drizzling.png", alt: "moderate drizzle" }],
    [55, { name: "raining.png", alt: "dense drizzle" }],

    [56, { name: "raining.png", alt: "light freezing drizzle" }],
    [57, { name: "raining.png", alt: "dense freezing drizzle" }],

    [61, { name: "raining.png", alt: "slight rain" }],
    [63, { name: "raining.png", alt: "moderate rain" }],
    [65, { name: "stormrainnn.png", alt: "heavy  rain" }],

    [66, { name: "raining.png", alt: "Light freezing rain" }],
    [67, { name: "stormrainnn.png", alt: "heavy intensity freezing rain" }],

    [71, { name: "snow.png", alt: "Slight snow fall" }],
    [73, { name: "snow.png", alt: "moderate snow fall" }],
    [75, { name: "snow.png", alt: "heavy intensity snow fall" }],

    [77, { name: "snow.png", alt: "Snow grains" }],

    [80, { name: "raining.png", alt: "slight rain showers" }],
    [81, { name: "raining.png", alt: "moderate rain showers" }],
    [82, { name: "stormrainnn.png", alt: "violent rain showers" }],

    [85, { name: "snow.png", alt: "slight snow showers" }],
    [86, { name: "snow.png", alt: "heavy snow showers" }],

    [95, { name: "storm.png", alt: "Thunderstorm" }],

    [96, { name: "stormangy.png", alt: "Thunderstorm with slight hail" }],
    [99, { name: "stormangy.png", alt: "Thunderstorm with heavy hail" }],
])
var weather_obj
// make a question mark weather png
if (!WeatherCodeMap.has(props.weather_code)) {
    weather_obj = { name: "cloud.png", alt: "weather icon uNKNOWN DIE" }
} else {
    weather_obj = WeatherCodeMap.get(props.weather_code)

    if (props.isDay == false) {
        if (props.weather_code == 0) {
            weather_obj = { name: "moonstars.png", alt: "clear" }
        } else if (props.weather_code == 1) {
            weather_obj = { name: "moonstars.png", alt: "clear" }
        } else if (props.weather_code == 2) {
            weather_obj = { name: "moonstars.png", alt: "clear" }
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
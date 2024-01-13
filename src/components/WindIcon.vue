<script setup>
import { ref } from 'vue'

const props = defineProps({
  wind_speed: Number,
  wind_direction: Number
})

let imgSrc;
let imgAlt;
// const windIconURL = new URL(`../../public/${weather_obj.name}`, import.meta.url).href;
if (props.wind_speed < 5) {
  imgSrc = new URL(`../../public/arrow1.png`, import.meta.url).href,
    imgAlt = "small wind arrow";
} else if (props.wind_speed < 15) {
  imgSrc = new URL(`../../public/arrow2.png`, import.meta.url).href,
    imgAlt = "medium wind arrow";
} else {
  imgSrc = new URL(`../../public/arrow3.png`, import.meta.url).href,
    imgAlt = "big wind arrow";
}

let scale_factor;
if (props.wind_speed > 25) {
  scale_factor = 1;
} else {
  scale_factor = props.wind_speed / 25;
}
</script>

<template>
  <img :style="{ rotate: wind_direction + 'deg', scale: scale_factor }" :src="imgSrc" :alt="imgAlt">
</template>

<style scoped>
img {
  width: 15%;
  margin: 5px;
}
</style>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  wind_speed: Number,
  wind_direction: Number
})

let imgSrc;
let imgAlt;
if (props.wind_speed < 5) {
  imgSrc = "../src/assets/icons/arrow1.png",
    imgAlt = "small wind arrow";
} else if (props.wind_speed < 15) {
  imgSrc = "../src/assets/icons/arrow2.png",
    imgAlt = "medium wind arrow";
} else {
  imgSrc = "../src/assets/icons/arrow3.png",
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
  <div class="windArrowDiv">
    <img :style="{ rotate: wind_direction + 'deg', scale: scale_factor }" :src="imgSrc" :alt="imgAlt">
  </div>
</template>

<style scoped>
img {
  width: 80px;
}
.windArrowDiv {
  padding: 2%;
  margin: 5px;
}
</style>
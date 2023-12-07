<!-- javscript house -->

<script setup>
import { ref } from "vue";
import WindIconInfo from "./components/WindIconInfo.vue";
import { watchEffect } from "vue";

const count = ref(0)
const expanded = ref(false)

function toggle() {
  expanded.value = !expanded.value
}


// class day{
//   day_overview = temp, wind, etc.
//   hours = [
//     {time:06, temp=31},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//     {time:02 temp=21},
//   ]
// }

// all_our_data = [day1, day2, day3, day4]



const data = ref(null)

async function fetchData(){
  var url = new URL("https://api.open-meteo.com/v1/forecast/");
  url.searchParams.append("latitude", 56.959);
  url.searchParams.append("longitude", 24.061);
  url.searchParams.append("daily", "weathercode");
  url.searchParams.append("daily", "temperature_2m_max");
  url.searchParams.append("daily", "temperature_2m_min");
  url.searchParams.append("daily", "precipitation_probability_max");
  url.searchParams.append("daily", "windspeed_10m_max");
  url.searchParams.append("daily", "winddirection_10m_dominant");

  url.searchParams.append("hourly", "temperature_2m");
  url.searchParams.append("hourly", "apparent_temperature");
  url.searchParams.append("hourly", "precipitation_probability");
  url.searchParams.append("hourly", "weathercode");
  url.searchParams.append("hourly", "windspeed_10m");
  url.searchParams.append("hourly", "winddirection_10m");
  url.searchParams.append("hourly", "is_day");
  url.searchParams.append("hourly", "uv_index");

  url.searchParams.append("timezone", "auto");
  data.value = await (await fetch(url)).json()
  console.log(data.value)


}

watchEffect(fetchData)


</script>

<!-- html house -->
<template>
  <main>
    <div class="outerContainer" @click="toggle">
      <div class="dayCont">
        <WindIconInfo :wind_speed="data['daily']['windspeed_10m_max'][0]" :wind_direction="360"></WindIconInfo>
        <WindIconInfo :wind_speed="5" :wind_direction="360"></WindIconInfo>
        <WindIconInfo :wind_speed="5" :wind_direction="360"></WindIconInfo>
        <WindIconInfo :wind_speed="5" :wind_direction="360"></WindIconInfo>

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
    </div>
  </main>
</template>

<!-- css house -->
<style scoped>
button {
  background-color: aqua;
}

main {
  background-image: url("field1.jpg");
  height: 98vh;
  width: 99vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
  align-items: center;

}

.outerContainer {
  display: flex;
  flex-direction: column;
  background-color: rgb(72, 212, 212);
}

.dayCont {
  display: flex;
  background-color: rgb(23, 182, 182);



}

.hourCont {
  background-color: rgb(31, 103, 236);
  display: flex;
  flex-direction: column;
  gap: 1vh;
}
</style>
<!-- use css property "order:" to make 1-5am appear last? or something like it apperntly messes with html accesibility whatever that means grrrr-->






<!-- old <template><main>
  
</main></template> -->
<!-- javscript house -->
<script setup>
import { watchEffect } from "vue";
import { ref } from "vue";
// import  DateC from 'C:/vueCounter123/src/components/DateC.vue';

const expanded = ref(false)
const allDays = ref([])

function toggle() {
  expanded.value = !expanded.value
}

class OverView {
  constructor(time, temp_min, temp_max, precipitation, weathercode, wind_dir, wind_speed) {
    this.time = new Date(time);
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.precipitation = precipitation;
    this.weathercode = weathercode;
    this.wind_dir = wind_dir;
    this.wind_speed = wind_speed;
  }}
class WeatherHour {
  constructor(time, temp_app, is_day, precipitation, temp, uv_index, weathercode, wind_dir, wind_speed) {
    this.time = new Date(time);
    this.temp_app = temp_app;
    this.is_day = is_day;
    this.precipitation = precipitation;
    this.temp = temp;
    this.uv_index = uv_index;
    this.weathercode = weathercode;
    this.wind_dir = wind_dir;
    this.wind_speed = wind_speed;
  }}
class WeatherDay {
  constructor(dayOverview, hours) {
    this.dayOverview = dayOverview;
    this.hours = hours;
  }}

const data = ref(null)

async function fetchData() {
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
  // console.log(data.value)

  for (var i = 0; i < data.value['daily']['time'].length; i++) {

    const overview = new OverView(
      data.value['daily']['time'][i],
      data.value['daily']['temperature_2m_min'][i],
      data.value['daily']['temperature_2m_max'][i],
      data.value['daily']['precipitation_probability_max'][i],
      data.value['daily']['weathercode'][i],
      data.value['daily']['winddirection_10m_dominant'][i],
      data.value['daily']['windspeed_10m_max'][i]
    )
    const this_day = new WeatherDay(overview, [])

    allDays.value.push(this_day)
  }

  for (var i = 0; i < data.value['hourly']['time'].length; i++) {
    const hour = new WeatherHour(
      data.value['hourly']['time'][i],
      data.value['hourly']['apparent_temperature'][i],
      data.value['hourly']['is_day'][i],
      data.value['hourly']['precipitation_probability'][i],
      data.value['hourly']['temperature_2m'][i],
      data.value['hourly']['uv_index'][i],
      data.value['hourly']['weathercode'][i],
      data.value['hourly']['winddirection_10m'][i],
      data.value['hourly']['windspeed_10m'][i]
    )

    var target_date = hour.time.getDate()
    const found = allDays.value.find((day) => day.dayOverview.time.getDate() == target_date)

    found.hours.push(hour)
  }

  console.log(`visa sdienas:`)
  console.log(allDays.value)
}

watchEffect(fetchData)
 var placeholder = "lorem ipsum etc"

</script>

<!-- html house -->
<template>
  <main class="allDayMasterContainer">
    <div class="oneDAyContainer" @click="toggle">
      <div class="dayCont">
        <div>20 dec aukksti</div>
        
        <!-- 
        <div>temp temp </div>
        <div>smal info1 smal info2 smal info3 </div>
        <div>wind arrow</div> -->
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
    <div class="oneDAyContainer" @click="toggle">
      <div class="dayCont">
        <div>20 dec aukksti</div>
        
        <!-- 
        <div>temp temp </div>
        <div>smal info1 smal info2 smal info3 </div>
        <div>wind arrow</div> -->
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
    <div class="oneDAyContainer" @click="toggle">
      <div class="dayCont">
        <div>20 dec aukksti</div>
        
        <!-- 
        <div>temp temp </div>
        <div>smal info1 smal info2 smal info3 </div>
        <div>wind arrow</div> -->
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

.allDayMasterContainer {
  display: flex;
  flex-direction: column;
  background-color: rgb(33, 59, 59);
}

.oneDAyContainer {
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
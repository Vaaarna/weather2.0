<!-- javscript house -->
<script setup>
import { watchEffect } from "vue";
import { ref } from "vue";
import { WeatherDay, WeatherHour, OverView } from "./functions";
import DayContainer from "./components/DayContainer.vue";
import Search from './components/Search.vue';
import examples from './components/examples.vue';
// import DCSmallInfo from "./components/DCSmallInfo.vue";

const allDays = ref([])
const data = ref(null)
const locationName = ref("")

// starts displaying day from hourOffset , at the end of the day are the hours that are not displayed from the next day
// const hourOffset = 0

// var latit = ;
// var longit = 24.061;

async function fetchData(latit, longit) {
  // console.log("here4", latit)
  // console.log("here4", longit)

  var url = new URL("https://api.open-meteo.com/v1/forecast/");
  url.searchParams.append("latitude", latit);
  url.searchParams.append("longitude", longit);
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

  allDays.value = []
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

    // ieliek stundu pie pareizas dienas
    var target_date = hour.time.getDate()
    const found = allDays.value.find((day) => day.dayOverview.time.getDate() == target_date)

    var nowHour = new Date()
    if (hour.time.getTime() >= nowHour.getTime()) {
      found.hours.push(hour)
    } else if (hour.time.getHours() >= nowHour.getHours()) {
      found.hours.push(hour)
      // found.hours.push(hour)

    }
  }
  // console.log(`visas dienas:`)
  // console.log(allDays.value)
}
//si funkcija panems nosaukumu un atgriezis koordinatas
function locationToCoords(newLocation){
  return [-77.84, 166.71]
}

function changeLocation(newLocation) {
  locationName.value = newLocation
  // console.log("here1")
  const [newLat, newLong] = locationToCoords(newLocation)
  // console.log("lat", newLat)
  // console.log("long", newLong)
  // console.log("here2")
  fetchData(newLat, newLong)
}

watchEffect(fetchData(56.959, 24.061)) //shoud be default/last coords set in the browser, for now default is dzegužkalna koords 56.959, 24.061

</script>


<template>
  <!-- html house -->
  <div class="background">

    <Search @change-location="changeLocation"></Search>
    <div>
      <div class="locationName"> Location: {{ locationName }}</div>
      <div class="allDayMasterContainer">
        <!-- <img src="../src/assets/icons/arrow_finalV3_rinalds_parpucis_9a.png"> -->
        <div class="oneDayContainer" v-for="day of allDays">
          <DayContainer :day_obj="day"></DayContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- css house -->
<style scoped>
.background {
  display: flex;
  justify-content: center;
}

.locationName {
  background-color: rgb(0, 94, 94);

}

.allDayMasterContainer {

  display: flex;
  align-items: stretch;
  flex-direction: column;
  border-radius: 5px;

  width: 90%;
  max-width: 500px;
}

.oneDayContainer {
  background-color: rgb(196, 243, 243);

  border-radius: 5px;
  margin: 5px;
  padding: 3px;
}
</style>

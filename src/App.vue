<!-- javscript house -->
<script setup>
import { watchEffect } from "vue";
import { ref } from "vue";
import { WeatherDay, WeatherHour, OverView } from "./functions";
import DayContainer from "./components/DayContainer.vue";

const allDays = ref([])
const data = ref(null)

// starts displaying day from hourOffset , at the end of the day are the hours that are not displayed from the next day
const hourOffset  = 6

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


    // var target_date = hour.time.getDate()
    // const found = allDays.value.find((day) => day.dayOverview.time.getDate() == target_date)

    // function(h) {
    //   this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    //   return this;
    // }
      // return console.log(day_t_extra5hours)
      // return  true if hour should be under this day
      // return  day_t_extra5hours.getDate() == hour_t

    function a(day) {
      var hour_t = hour.time
      var day_t = day.dayOverview.time
      var hour_t_extra5hours = new Date(hour_t.getTime() - (hourOffset * 60 * 60 * 1000))
      // console.log("hour_t:")
      // console.log(hour_t)
      // console.log("day_t:")
      // console.log(day_t)
      // console.log("day_5h:")
      // console.log(day_t_extra5hours)
      
      return day_t.getDate() == hour_t_extra5hours.getDate()
    
    }
    const found = allDays.value.find(a)


    // console.log(hour.time.getHours())
    // console.log(Date())

    var nowHour = new Date()
    if (hour.time.getTime() >= nowHour.getTime()) {
      found.hours.push(hour)
    } else if (hour.time.getHours() >= nowHour.getHours()) {
      found.hours.push(hour)
    }
    // found.hours.push(hour)

  }

  console.log(`visas dienas:`)
  console.log(allDays.value)
}

watchEffect(fetchData)

</script> 

<template>
  <!-- html house -->
  <div class="background">
    <div class="allDayMasterContainer">
      <div class="oneDayContainer" v-for="day of allDays">
        <DayContainer :day_obj="day"></DayContainer>
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

.allDayMasterContainer {

  display: flex;
  align-items: stretch;
  flex-direction: column;
  background-color: rgb(0, 85, 85);

}
</style>

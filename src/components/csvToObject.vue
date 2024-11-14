<script setup>
import { ref } from 'vue'
const citiesArray = [
  {
    city: "Riga",
    city_ascii: "Riga",
    lat: "56.9489",
    lng: "24.1064",
    country: "Latvia"
  },
  {
    city: "Daugavpils",
    city_ascii: "Daugavpils",
    lat: "55.8750",
    lng: "26.5356",
    country: "Latvia"
  },
  {
    city: "Liepāja",
    city_ascii: "Liepaja",
    lat: "56.5117",
    lng: "21.0139",
    country: "Latvia"
  },
  {
    city: "Jelgava",
    city_ascii: "Jelgava",
    lat: "56.6483",
    lng: "23.7139",
    country: "Latvia"
  },
  {
    city: "Jūrmala",
    city_ascii: "Jurmala",
    lat: "56.9681",
    lng: "23.7703",
    country: "Latvia"
  },
  {
    city: "Ventspils",
    city_ascii: "Ventspils",
    lat: "57.3906",
    lng: "21.5733",
    country: "Latvia"
  },
  {
    city: "Rēzekne",
    city_ascii: "Rezekne",
    lat: "56.5127",
    lng: "27.3427",
    country: "Latvia"
  },
  {
    city: "Ogre",
    city_ascii: "Ogre",
    lat: "56.8186",
    lng: "24.6056",
    country: "Latvia"
  },
  {
    city: "Valmiera",
    city_ascii: "Valmiera",
    lat: "57.5500",
    lng: "25.4000",
    country: "Latvia"
  },
  {
    city: "Jēkabpils",
    city_ascii: "Jekabpils",
    lat: "56.4994",
    lng: "25.8783",
    country: "Latvia"
  },
  {
    city: "Salaspils",
    city_ascii: "Salaspils",
    lat: "56.8667",
    lng: "24.3500",
    country: "Latvia"
  },
  {
    city: "Tukums",
    city_ascii: "Tukums",
    lat: "56.9667",
    lng: "23.1500",
    country: "Latvia"
  },
  {
    city: "Mārupe",
    city_ascii: "Marupe",
    lat: "56.9069",
    lng: "24.0583",
    country: "Latvia"
  },
  {
    city: "Cēsis",
    city_ascii: "Cesis",
    lat: "57.3167",
    lng: "25.2667",
    country: "Latvia"
  },
  {
    city: "Sigulda",
    city_ascii: "Sigulda",
    lat: "57.1500",
    lng: "24.8667",
    country: "Latvia"
  },
  {
    city: "Olaine",
    city_ascii: "Olaine",
    lat: "56.7833",
    lng: "23.9333",
    country: "Latvia"
  },
  {
    city: "Kuldīga",
    city_ascii: "Kuldiga",
    lat: "56.9667",
    lng: "21.9667",
    country: "Latvia"
  },
  {
    city: "Bauska",
    city_ascii: "Bauska",
    lat: "56.4083",
    lng: "24.1931",
    country: "Latvia"
  },
  {
    city: "Saldus",
    city_ascii: "Saldus",
    lat: "56.6667",
    lng: "22.5000",
    country: "Latvia"
  },
  {
    city: "Talsi",
    city_ascii: "Talsi",
    lat: "57.2444",
    lng: "22.5867",
    country: "Latvia"
  },
  {
    city: "Dobele",
    city_ascii: "Dobele",
    lat: "56.6167",
    lng: "23.2667",
    country: "Latvia"
  },
  {
    city: "Ludza",
    city_ascii: "Ludza",
    lat: "56.5500",
    lng: "27.7167",
    country: "Latvia"
  },
  {
    city: "Ādaži",
    city_ascii: "Adazi",
    lat: "57.0667",
    lng: "24.3333",
    country: "Latvia"
  },
  {
    city: "Krāslava",
    city_ascii: "Kraslava",
    lat: "55.8833",
    lng: "27.1667",
    country: "Latvia"
  },
  {
    city: "Aizkraukle",
    city_ascii: "Aizkraukle",
    lat: "56.6042",
    lng: "25.2539",
    country: "Latvia"
  },
  {
    city: "Līvāni",
    city_ascii: "Livani",
    lat: "56.3667",
    lng: "26.1833",
    country: "Latvia"
  },
  {
    city: "Gulbene",
    city_ascii: "Gulbene",
    lat: "57.1667",
    lng: "26.7500",
    country: "Latvia"
  },
  {
    city: "Limbaži",
    city_ascii: "Limbazi",
    lat: "57.5167",
    lng: "24.7167",
    country: "Latvia"
  },
  {
    city: "Madona",
    city_ascii: "Madona",
    lat: "56.8500",
    lng: "26.2167",
    country: "Latvia"
  },
  {
    city: "Alūksne",
    city_ascii: "Aluksne",
    lat: "57.4167",
    lng: "27.0500",
    country: "Latvia"
  },
  {
    city: "Preiļi",
    city_ascii: "Preili",
    lat: "56.3000",
    lng: "26.7167",
    country: "Latvia"
  },
  {
    city: "Balvi",
    city_ascii: "Balvi",
    lat: "57.1333",
    lng: "27.2500",
    country: "Latvia"
  },
  {
    city: "Smiltene",
    city_ascii: "Smiltene",
    lat: "57.4333",
    lng: "25.9000",
    country: "Latvia"
  },
  {
    city: "Ķekava",
    city_ascii: "Kekava",
    lat: "56.8333",
    lng: "24.2333",
    country: "Latvia"
  },
  {
    city: "Valka",
    city_ascii: "Valka",
    lat: "57.7667",
    lng: "26.0000",
    country: "Latvia"
  },
  {
    city: "Saulkrasti",
    city_ascii: "Saulkrasti",
    lat: "57.2500",
    lng: "24.4167",
    country: "Latvia"
  },
  {
    city: "Ulbroka",
    city_ascii: "Ulbroka",
    lat: "56.9333",
    lng: "24.2833",
    country: "Latvia"
  },
  {
    city: "Varakļāni",
    city_ascii: "Varaklani",
    lat: "56.6000",
    lng: "26.7500",
    country: "Latvia"
  },
  {
    city: "Ropaži",
    city_ascii: "Ropazi",
    lat: "56.9718",
    lng: "24.6318",
    country: "Latvia"
  }
]
//nakotne vajadzetu ka so var settot useri
let defaultLocation = "dzeguzkalns"
//validated user  input 
let newLocation = ""
//1. atrod vietu arraya
//2. idod atpakal koordinatas
function locationToCoord(newLocation) {
    citiesArray
}
</script>

<template>


</template>

<style scoped></style>
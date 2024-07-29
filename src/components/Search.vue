<script setup>
// const props = defineProps({
//     defaultLocation: dzeguzkalns,
//     input:input,
// })
// const isValid = ref(true)

// const isValid = computed(() => {
// console.log(isValid.value)
//  if (!vietas.has(lokacija)) {
//        return false
//     }else {
//        return true
//     }
// });
// function validateLocation() {
// }
// var isValid = ""
// function validateLocation() {
// if (!vietas.has(lokacija)) {
//     isValid.value = false
//     console.log("validate location")
//     console.log(isValid.value)
// } else {
//     isValid.value = true
//     console.log("validate location2")

//     console.log(isValid.value)

// }};

// const inputClassName = computed(() => {
//     // console.log("poop")
//     // console.log(isValid.value)
//     if (isValid.value == false) {
//         return "inputWrong"
//     } else {
//         return "inputCorrect"
//     }

// return author.books.length > 0 ? 'Yes' : 'No'
// });



// const props = defineProps({
//     nosaukums: String,
//     lat: Number,
//     lng: Number,
// })
// import {csv}

// const koordinatas = new Map([
//     [56.9489, 24.1064],
//     [55.8750, 26.5356],
//     [56.959, 24.061],
// ]);

// var koordinatas = "0"

// const vietas = new Map([
//     ["dzegužkalns", koordinatas],
//     ["tervete", koordinatas],
// ]);

// console.log(worldcities.value);
import { ref } from 'vue'

// pilsetu nosaukumiem jābūt ar mazajiem burtiem bez mīkstinajumiem būs jācheko pret normalized unnicode nosaukumiem
const pilsetas = new Map([
    ["riga", { lat: 56.9489, lng: 24.1064 }],
    ["daugavpils", { lat: 55.8750, lng: 26.5356 }],
    ["dzeguzkalns", { lat: 56.959, lng: 24.061 }],

]);


const lokacija = ref('Dzegužkalns');
const isValidLocation = ref(true)

// cheks if pilsetas map has the inputted location (turning whatever user inputted into lowercase normalised unicode ti bez diacritical marks)


function onInputChange(event) {
    lokacija.value = event.target.value
    if (pilsetas.has(lokacija.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        isValidLocation.value = true
        // emit
    } else {
        isValidLocation.value = false
    }
};


function getStyled() {
    if (isValidLocation.value) {
        return "inputCorrect";
    } else {
        return "inputWrong";
    }
};

</script>

<template>
    <div class="location">
        <h2>kur?</h2>
        <input :value="lokacija" @input="onInputChange" :class="getStyled()">
        <!-- <p>{{ lokacija }}</p> -->
    </div>
</template>

<style scoped>
.inputWrong {
    background-color: brown;
}

.inputCorrect {
    background-color: green;
}


.location {
    background-color: rgb(196, 243, 243);
}

.inputDefault {
    background-color: rgb(199, 228, 219);
}
</style>
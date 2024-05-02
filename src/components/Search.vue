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

import { ref } from 'vue'
import worldcities from './assets/simplemaps_worldcities_basicv1.77/worldcities.csv'


const lokacija = ref('dzegužkalns');

var koordinatas = "0"

const vietas = new Map([
    ["dzegužkalns", koordinatas],
    ["tervete", koordinatas],
]);

// console.log(worldcities.value);

function onInputChange(event) {
    lokacija.value = event.target.value
};


function getStyled() {
    if (vietas.has(lokacija.value)) {
        // console.log("correct");
        return "inputCorrect";
    } else {
        // console.log("wrong");
        return "inputWrong";
    }};
    
</script>

<template>
    <div class="location">
        <h2>kur?</h2>
        <input 
        :value="lokacija"
        @input="onInputChange" 
        :class="getStyled()" >
        <!--  <p>{{ lokacija }}</p> -->
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
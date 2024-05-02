<script setup>
import { ref, computed } from 'vue'

// const props = defineProps({
//     defaultLocation: dzeguzkalns,
//     input:input,
// })
const lokacija = ref('dzegužkalns');

const isValid = ref(true)

var koordinatas = "0"
const vietas = new Map([
    ["dzegužkalns", koordinatas],
    ["tervete", koordinatas],
]);



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
function validateLocation() {
if (!vietas.has(lokacija)) {
    isValid.value = false
    console.log("validate location")
    console.log(isValid.value)
} else {
    isValid.value = true
    console.log("validate location2")

    console.log(isValid.value)

}};

const inputClassName = computed(() => {
    // console.log("poop")
    // console.log(isValid.value)
    if (isValid.value == false) {
        return "inputWrong"
    } else {
        return "inputCorrect"
    }

    // return author.books.length > 0 ? 'Yes' : 'No'
});
</script>

<template>
    <div class="location">
        <h2>kur?</h2>
        <input @input="validateLocation" :class="{ inputClassName }" v-model="lokacija">
        <!-- <p>{{ lokacija }}</p> -->
    </div>
</template>

<style scoped>
.location {
    background-color: rgb(196, 243, 243);
}

.inputDefault {
    background-color: rgb(199, 228, 219);
}

;

.inputWrong {
    background-color: brown;
}

.inputCorrect {
    background-color: rgb(14, 167, 0);
}
</style>

<!-- 
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')

function onInputChange(event){
  msg.value = event.target.value
}

</script>

<template>
  <h1>{{ msg }}</h1>
  
  <input
  :value="msg"
  @input="onInputChange">
</template> -->



<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')

function onInputChange(event){
  msg.value = event.target.value
}

function getFormStyle() {
  if (msg.value.includes("Hello")) {
    return "goodStyle"
  } else {
    return "badStyle"
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>
  
  <input
  :value="msg"
  @input="onInputChange"
  :class="getFormStyle()">
</template>


<style scoped>
.goodStyle {
  background-color: green;
}
.badStyle{
  background-color: red;
}
</style>







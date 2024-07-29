<script setup>
import { ref } from 'vue'
//importee componenti
import Comp from './Comp.vue'
//msg ir mainiigs teksts
const msg = ref('Hello World!')

//callback izpildaas kad catcho eventu ko emmito Comp.vue
//ref lietām vajag .value

function callback(lat, long) {
msg.value = `poop Works ${lat}, ${long}`
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <!-- Comp ķer eventu new-location un izsauc callback funkciju -->
  <!-- event nosaukumiem jabut kebab-case -->
  <Comp @new-location="callback"></Comp>
</template>


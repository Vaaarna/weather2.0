<!-- javscript house -->

<script setup>
import { ref } from "vue";
const count = ref(0)
</script>

<!-- html house -->
<template>
  <main>
    <div>
      <h4>
        how many cats?
      </h4>
      <h1>{{ count }}!</h1>
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </main>
</template>

<!-- css house -->
<style scoped>
button {
  background-color: aqua;
}

main {
  background-color: rgb(52, 114, 52);
  height: 100vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>







<!-- old <template><main>
  
</main></template> -->
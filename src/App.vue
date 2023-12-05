<!-- javscript house -->

<script setup>
import { ref } from "vue";
const count = ref(0)
const expanded = ref(false)

function toggle() {
  expanded.value = !expanded.value
}
</script>

<!-- html house -->
<template>
  <main>
    <div class="outerContainer" @click="toggle">
      <div class="dayCont">
        header!
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

.outerContainer {
  display: flex;
  flex-direction: column;
}
.dayCont {
  background-color: rgb(72, 212, 212);
  display: flex;
 
 
}
.hourCont {
  background-color: rgb(31, 103, 236);
  display: flex;
  flex-direction: column;
}

</style>







<!-- old <template><main>
  
</main></template> -->
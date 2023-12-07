<!-- javscript house -->

<script setup>
import { ref } from "vue";
import WindInfo from "./components/WindInfo.vue";

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
        <WindInfo :wind_speed="5" :wind_direction="360" ></WindInfo>
        <WindInfo :wind_speed="5" :wind_direction="360" ></WindInfo>
        <WindInfo :wind_speed="5" :wind_direction="360" ></WindInfo>
        <WindInfo :wind_speed="5" :wind_direction="360" ></WindInfo>
        
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
  background-image: url("field1.jpg");
  height: 98vh;
  width: 99vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
  align-items: center;

}

.outerContainer {
  display: flex;
  flex-direction: column;
  background-color: rgb(72, 212, 212);
}

.dayCont {
  display: flex;
  background-color: rgb(23, 182, 182);



}

.hourCont {
  background-color: rgb(31, 103, 236);
  display: flex;
  flex-direction: column;
  gap: 1vh;
}
</style>
<!-- use css property "order:" to make 1-5am appear last? or something like it apperntly messes with html accesibility whatever that means grrrr-->






<!-- old <template><main>
  
</main></template> -->
<script setup>
//definē ka emmitos newLocation (app.vue tas rādās kebabkeisā)
const emit = defineEmits(['newLocation'])

function buttonClick() {
  const lat = 25.3434
  const long = 54.2345
  emit('newLocation', lat, long)
  //funkcijā ir divi mainīgie un tos iedod līdzi uz emmitošanu kā parametrus
}

</script>

<template>
  <div>
    <!-- kad kliko bogu izpildas funkcija buttonClick -->
    <button @click="buttonClick">Reverse Message</button>

  </div>
</template>

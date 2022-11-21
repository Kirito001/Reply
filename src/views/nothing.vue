<template>
  <v-sheet
    height="100%"
    class="d-flex flex-column justify-center align-center"
    color="transparent"
  >
    <v-img
      width="100%"
      max-height="300"
      max-width="400"
      :src="darkImg"
      v-show="theme=='dark'"
    ></v-img>
    <v-img
      width="100%"
      max-height="300"
      max-width="400"
      :src="lightImg"
      v-show="theme=='light'"
    ></v-img>
    <span>内容暂未开发</span>
  </v-sheet>
</template>

<script setup>
import { ref, onActivated } from 'vue'
import { useTheme } from 'vuetify'

const darkImg = ref(new URL('@/assets/nothing-dark.svg', import.meta.url).href)
const lightImg = ref(new URL('@/assets/nothing-light.svg', import.meta.url).href)

let theme = ref('useTheme().global.name.value')

onActivated(() => {
  theme.value = useTheme().global.name.value
})
</script>
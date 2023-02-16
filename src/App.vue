<!-- <script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script> -->

<template>
  <v-app id="intro">
    <NavBar :function="toggleDark" :isDark="isDark" />
    <v-main> <router-view /> </v-main
  ></v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>

<style></style>

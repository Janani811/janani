<template>
  <section class="intro mt-4 py-8">
    <div class="intro-name text-7xl font-black text-center">
      HEY ,I AM JANANI
    </div>
    <p class="text-center text-2xl mt-9 tracking-wider">
      A
      <span class="text-[#0a042a] font-extrabold">Software Engineer</span>
      passionate about developing interactive applications, help you to solve
      problems and build a product or grow an existing project.
    </p>
    <div class="w-full flex items-center justify-center mt-10">
      <a
        href="./#projects"
        class="rounded btn btn-warning projects hover:animate-pulse"
      >
        Projects
      </a>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IntroView",
});
</script>
<style>
.projects {
  color: black;
}
</style>

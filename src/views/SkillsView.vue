<script setup>
import { skills } from "../utils";
</script>

<template>
  <section class="hero flex min-h-fit w-fit py-8" id="skills">
    <div class="hero-content flex-col">
      <div class="w-fit">
        <h1 class="text-5xl font-bold text-center title">TECH SKILLS</h1>
        <div class="py-10 flex flex-wrap">
          <div
            class="badge h-10 m-2 w-max skills-badge"
            v-for="(skill, x) in skills"
            :key="x"
          >
            <span class="p-5 text-lg">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsView",
});
</script>

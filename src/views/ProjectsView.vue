<script setup>
import { projectData } from "../utils";
</script>

<template>
  <section class="py-8" id="projects">
    <h1 class="text-5xl font-bold text-center title">PROJECTS</h1>
    <div
      class="carousel carousel-center rounded-box carousel w-full mt-10 shadow-xl project-card"
    >
      <div
        class="carousel-item relative w-full"
        v-for="(data, x) in projectData"
        :key="x"
        :id="x"
      >
        <ProjectCard
          :title="data.title"
          :tools="data.tools"
          :projectImage="data.imageSrc"
          :description="data.description"
          :outputImages="data.outputImages"
          :prev="x - 1 != -1 ? `#${x - 1}` : `#${projectData.length - 1}`"
          :next="x + 1 != projectData.length ? `#${x + 1}` : `#0`"
          @bindOutputImages="getBindOutputImages"
        />
        <OutputImageModal :outputImages="imagesArray" :title="imageTitle" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

import ProjectCard from "../components/ProjectCard.vue";

import OutputImageModal from "../components/OutputImageModal.vue";

export default defineComponent({
  name: "ProjectsView",
  components: { ProjectCard, OutputImageModal },
  data: () => {
    return {
      imagesArray: [],
      imageTitle: "",
    };
  },

  methods: {
    getBindOutputImages(images, imagetitle) {
      this.imageTitle = imagetitle;
      this.imagesArray = images;
    },
  },
});
</script>

<style>
.project-card {
  border: 0.2rem solid #ffbe0b;
}
</style>

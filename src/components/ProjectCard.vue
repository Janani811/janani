<template>
  <div
    class="card card-compact shadow-xl w-full items-center justify-center flex-row"
  >
    <figure class="w-11/12 ml-2">
      <img
        :src="require(`../assets/projects/${projectImage}`)"
        alt="title"
        class="p-2 object-cover max-h-80"
      />
    </figure>
    <div class="card-body w-9/12">
      <h2 class="card-title">{{ title }}</h2>
      <p class="grow-0">
        {{ description }}
      </p>
      <div class="tools pt-3">
        <span class="text-md font-bold">Tools Used</span>
        <div class="flex flex-wrap pt-1">
          <div
            class="badge badge-md m-1 tools-used p-1 w-max"
            v-for="(tool, x) in tools"
            :key="x"
          >
            <span class="py-2 px-3 text-md">{{ tool }}</span>
          </div>
        </div>
      </div>

      <div class="card-actions justify-center">
        <label
          for="my-modal-4"
          class="hover:transition-all ease-in-out duration-100 mt-6 btn-warning capitalize rounded-tl-lg rounded-br-lg p-3 font-semibold hover:bg-black hover:text-[#ffbe0b]"
          @click="this.$emit('bindOutputImages', outputImages, title)"
        >
          Show Images
        </label>
      </div>
    </div>
    <div
      class="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2"
    >
      <a :href="prev" class="btn btn-circle">❮</a>
      <a :href="next" class="btn btn-circle">❯</a>
    </div>
  </div>
  <OutputImageModal @bindOutputImages="getBindOutputImages" />
</template>
<script>
import { defineComponent } from "vue";
// import OutputImageModal from "./OutputImageModal.vue";

export default defineComponent({
  name: "ProjectCard",
  // components: { OutputImageModal },
  props: [
    "title",
    "tools",
    "projectImage",
    "description",
    "prev",
    "next",
    "outputImages",
  ],

  data: function () {
    return {};
  },
});
</script>

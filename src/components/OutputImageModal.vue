<template>
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label
    for="my-modal-4"
    class="modal modal-bottom sm:modal-middle cursor-pointer"
  >
    <label
      class="modal-box relative image-modal-container justify-center image-modal"
      for=""
    >
      <div class="carousel carousel-center rounded-box carousel w-full">
        <div
          class="carousel-item relative w-full p-2 h-96"
          v-for="(outputImage, x) in outputImages"
          :key="x"
          :id="'image' + x"
        >
          <div class="card card-compact w-full items-center justify-center">
            <h3
              class="text-lg font-bold image-modal-header p-1 text-center rounded-md"
            >
              {{ title }}
            </h3>
            <img
              :src="require(`../../public/assets/projects/${outputImage}`)"
              alt="title"
              class="object-cover max-h-80 mt-5"
            />
          </div>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              :href="
                x - 1 != -1
                  ? `#image${x - 1}`
                  : `#image${outputImages.length - 1}`
              "
              class="btn btn-circle"
              >❮</a
            >
            <a
              :href="
                x + 1 != outputImages.length ? `#image${x + 1}` : `#image0`
              "
              class="btn btn-circle"
              >❯</a
            >
          </div>
        </div>
      </div>
    </label>
  </label>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OutputImageModal",
  props: ["title", "outputImages"],

  data: function () {
    return {};
  },
});
</script>
<style>
.image-modal {
  background-color: white;
}
.image-modal-header {
  background-color: #0a042a;
  color: #ffbe0b;
  width: 95%;
}
</style>

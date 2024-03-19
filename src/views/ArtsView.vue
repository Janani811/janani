<template>
  <section
    class="hero flex items-center justify-center min-h-fit py-8"
    id="arts"
  >
    <div class="hero-content flex-col">
      <div class="w-fit">
        <h1 class="text-5xl font-bold text-center title">ARTS</h1>
        <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
          Welcome to My Artistic Skills Showcase!
        </p>
        <div class="py-2 text-xl leading-8 tracking-wide">
          <p class="mt-3">
            As a software engineer deeply passionate about creativity and
            expression, I find inspiration not only in the logic of code but
            also in the fluidity of brush strokes and the tactile sensations of
            various artistic mediums.
          </p>
          <p class="mt-5">
            Step into my world, where I breathe life into pencil sketches, oil
            pastel paintings, and acrylic artworks. Each creation embodies my
            commitment to craftsmanship and reflects a journey of continuous
            learning and self-expression. From delicate lines to bold gestures,
            I invite you to immerse yourself in my artistic odyssey, shaped by
            the timeless allure of traditional techniques.
          </p>
          <p class="mt-5">
            Join me as I share my love for drawing and painting, aiming to
            ignite emotions and ignite the spark of creativity in others. Thank
            you for accompanying me on this enriching artistic journey.
          </p>
        </div>

        <div class="contents">
          <div class="pencils">
            <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
              Pencil Sketches
            </p>
            <div>
              <p class="text-xl leading-8 tracking-wide mt-5 font-medium">
                Sketch Gallery:
              </p>
              <div class="flex flex-row flex-wrap">
                <div
                  v-for="(image, index) in pencilImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-1/4"
                >
                  <img
                    :src="image"
                    alt="pencils"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="acrylics">
            <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
              Acrylic Paintings
            </p>
            <div>
              <p class="text-xl leading-8 tracking-wide mt-5 font-medium">
                Painting Gallery:
              </p>
              <div class="flex flex-row flex-wrap">
                <div
                  v-for="(image, index) in acrylicsImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-1/4"
                >
                  <img
                    :src="image"
                    alt="acrylics"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="oil-pastels">
            <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
              Oil Pastel Artworks
            </p>
            <div>
              <p class="text-xl leading-8 tracking-wide mt-5 font-medium">
                Artwork Gallery:
              </p>
              <div class="flex flex-row flex-wrap gap-y-4">
                <div
                  v-for="(image, index) in oilPastelsVerticalImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-1/4"
                >
                  <img
                    :src="image.imageUrls"
                    alt="oil-pastels"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div
                  v-for="(image, index) in oilPastelsHorizontalImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-2/4"
                >
                  <img
                    :src="image.imageUrls"
                    alt="oil-pastels"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="decorative-art">
            <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
              Decorative Art
            </p>
            <div>
              <p class="text-xl leading-8 tracking-wide mt-5 font-medium">
                Design Gallery:
              </p>
              <div class="flex flex-row flex-wrap">
                <div
                  v-for="(image, index) in decorativeArtsImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-1/4"
                >
                  <img
                    :src="image"
                    alt="designs"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="crafts">
            <p class="pt-10 text-3xl leading-8 tracking-wide font-semibold">
              Crafts Showcase
            </p>
            <div>
              <p class="text-xl leading-8 tracking-wide mt-5 font-medium">
                Exploring Handcrafted Creations:
              </p>
              <div class="flex flex-row flex-wrap">
                <div
                  v-for="(image, index) in craftsImages"
                  :key="index"
                  :id="'image' + index"
                  class="image-container w-1/4"
                >
                  <img
                    :src="image"
                    alt="crafts"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import {
  pencilImages,
  acrylicsImages,
  oilPastelsImages,
  decorativeArtsImages,
  craftsImages,
} from "@/utils";

export default defineComponent({
  name: "ArtsView",
  data: () => {
    return {
      pencilImages: pencilImages,
      acrylicsImages: acrylicsImages,
      oilPastelsHorizontalImages: oilPastelsImages.filter(
        (item) => item.position === "horizontal"
      ),
      oilPastelsVerticalImages: oilPastelsImages.filter(
        (item) => item.position === "vertical"
      ),
      decorativeArtsImages: decorativeArtsImages,
      craftsImages: craftsImages,
    };
  },
});
</script>
<style lang=""></style>

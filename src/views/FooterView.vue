<template>
  <footer
    class="footer footer-center"
    id="contact"
    style="background-color: #0a042a"
  >
    <div class="py-8 text-white">
      <div class="text-xl">Contact Me @</div>
      <div class="flex justify-between font-italic text-grey">
        <div class="flex items-center">
          <img :src="mailIcon" class="image" />
          <span class="ml-3 text-lg">jananigopalsanthi@gmail.com</span>
        </div>
        <div class="flex items-center ml-4">
          <img :src="callIcon" class="image" />
          <span class="ml-2 text-lg">8838401180</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

import mailIcon from "../../public/assets/email.png";
import callIcon from "../../public/assets/call.png";

export default defineComponent({
  name: "FooterView",

  data: () => {
    return {
      mailIcon,
      callIcon,
    };
  },
});
</script>

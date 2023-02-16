<template>
  <footer class="footer footer-center bg-neutral" id="contact">
    <div class="py-10 text-white">
      <div class="text-xl">Contact Me @</div>
      <div class="flex flex-col justify-between font-italic text-grey">
        <div class="flex items-center">
          <img :src="mailIcon" class="image" />
          <span class="ml-3 text-lg">jananigopalsanthi@gmail.com</span>
        </div>
        <div class="flex items-center mt-2">
          <img :src="callIcon" class="image" />
          <span class="ml-3 text-lg">8838401180</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

import mailIcon from "../assets/email.png";
import callIcon from "../assets/call.png";

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

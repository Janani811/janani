<template lang="">
  <div class="drop-shadow-2xl">
    <ul class="menu rounded-tr-lg rounded-br-lg">
      <li>
        <a href="https://www.linkedin.com/in/janani-janani-8b9341140/">
          <img :src="LinkedInIcon" class="image" />
        </a>
      </li>
      <li>
        <a href="https://github.com/janani811">
          <img :src="GithubIcon" class="image" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Janani_811">
          <img :src="TwitterIcon" class="image" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import LinkedInIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";
import TwitterIcon from "../assets/twitter.png";

export default defineComponent({
  name: "ContactMenu",
  data() {
    return {
      LinkedInIcon,
      GithubIcon,
      TwitterIcon,
    };
  },
});
</script>
<style lang=""></style>

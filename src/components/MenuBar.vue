<template lang="">
  <div class="drop-shadow-2xl">
    <ul class="menu rounded-tl-lg rounded-bl-lg">
      <li
        class="tooltip tooltip-left tooltip-warning font-bold"
        data-tip="Home"
      >
        <a href="./#intro" width="100%">
          <img :src="homeIcon" class="image" />
        </a>
      </li>
      <li
        class="tooltip tooltip-left tooltip-warning font-bold"
        data-tip="About"
      >
        <a href="./#about" width="100%">
          <img :src="aboutIcon" class="image" />
        </a>
      </li>
      <li
        class="tooltip tooltip-left tooltip-warning font-bold"
        data-tip="Tech Skills"
      >
        <a href="./#skills" width="100%">
          <img :src="skillsIcon" class="image" />
        </a>
      </li>
      <li
        class="tooltip tooltip-left tooltip-warning font-bold"
        data-tip="Projects"
      >
        <a href="./#projects" width="100%">
          <img :src="projectsIcon" class="image" />
        </a>
      </li>

      <li
        class="tooltip tooltip-left tooltip-warning font-bold"
        data-tip="Contact"
      >
        <a href="./#contact" width="100%">
          <img :src="contactIcon" class="image" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import homeIcon from "../assets/home-icon.png";
import aboutIcon from "../assets/about.png";
import projectsIcon from "../assets/projects.png";
import skillsIcon from "../assets/skills.png";
import contactIcon from "../assets/contact.png";

export default defineComponent({
  name: "ContactMenu",
  data: function () {
    return {
      homeIcon: homeIcon,
      aboutIcon: aboutIcon,
      projectsIcon: projectsIcon,
      skillsIcon: skillsIcon,
      contactIcon: contactIcon,
    };
  },
});
</script>
<style>
.image {
  max-width: 24px;
  max-height: 24px;
}
.menu {
  background-color: #0a042a;
}
</style>

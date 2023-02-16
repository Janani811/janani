<template lang="">
  <div class="wrapper">
    <div class="wrapper__aside">
      <ContactMenu />
    </div>
    <div class="wrapper__rightaside">
      <MenuBar />
    </div>
    <main class="wrapper__body h-full flex-col">
      <div class="flex-col w-8/12 container">
        <IntroView />

        <a
          class="animate-bounce flex justify-center down_arrow py-8 rounded"
          href="./#about"
        >
          <div class="rounded-full">
            <img :src="downArrowIcon" class="w-6 h-6 arrow_icon" />
          </div>
        </a>

        <AboutView />
        <SkillsView />
        <ProjectsView />
      </div>
    </main>

    <FooterView />
  </div>
</template>
<script>
import { defineComponent } from "vue";

import ContactMenu from "../components/ContactMenu.vue";
import MenuBar from "../components/MenuBar.vue";
import IntroView from "./IntroView.vue";
import AboutView from "./AboutView.vue";
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import FooterView from "./FooterView.vue";

import downArrowIcon from "../assets/down-arrow.png";

export default defineComponent({
  name: "HomeView",
  components: {
    ContactMenu,
    MenuBar,
    IntroView,
    AboutView,
    SkillsView,
    ProjectsView,
    FooterView,
  },
  props: {
    projectData: Array,
  },
  data: () => {
    return {
      downArrowIcon,
    };
  },
});
</script>
<style>
.rounded-full {
  border: 0.2rem solid #03045e;
}
</style>

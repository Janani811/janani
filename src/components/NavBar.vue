<template>
  <div class="navbar">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-l">
        <img :src="portfolioIcon" class="image" />
        <div class="name ml-2">JANANI</div>
      </a>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import portfolioIcon from "../../public/assets/portfolio.png";

export default defineComponent({
  name: "NavBar",
  data: function () {
    return {
      portfolioIcon: portfolioIcon,
    };
  },
});
</script>
<style>
.btn-ghost:hover {
  background-color: transparent;
  color: rgb(255, 196, 0);
  font-size: 21px;
  text-shadow: 2px 2px 3px #978f8f;
}
</style>

<template>
  <div :class="{burger__open: isOpen}" class="app-main-layout">
    <Header @burger="isOpen = !isOpen"/>
    <Burger  v-model="isOpen"/>
    <main class="app-content" >
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <Footer/>

  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Burger from "@/components/Burger";
import Footer from "@/components/Footer";
import {gsap} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: false
  }),
  watch: {
    '$route': {
      deep: true,
      handler () {
        this.isOpen = false;
      }
    }
  },
  components: {
    Footer,
    Header,
    Burger
  },
  mounted() {
    function animateFrom(elem, direction) {
      direction = direction | 1;
      var x = 0,
          y = direction * 200;
      gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "ease",
        overwrite: "auto"
      });
    }
    function hide(elem) {
      gsap.set(elem, {autoAlpha: 0});
    }
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom center",
        // once: true, одно повторение
        onEnter: function() { animateFrom(elem) },
        // onEnterBack: function() { animateFrom(elem, -1) },
        // onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

  }
}

</script>

<style lang="scss" scoped>
.app-main-layout {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
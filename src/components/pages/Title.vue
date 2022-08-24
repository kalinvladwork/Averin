<template>
  <section class="section__pages section__title">
    <h1 class="section__title_h1" data-splitting>{{ TitlePage }}</h1>
  </section>
</template>

<script>
import Splitting from "splitting";
import {gsap} from "gsap/dist/gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
name: "Title",
  props: {
    TitlePage: {
      default: 'Title undefined'
    }
  },
  mounted() {
    Splitting();

    gsap.set('.section__title_h1 .char', {y: 0, opacity: 1})
    gsap.set('.section__title_h1 .word', {y: 0, overflow: 'hidden'})
    gsap.timeline().from('.section__title_h1 .char', {y: -200, opacity:0, stagger: 0.05, duration:0.5})



    // let titleSplitting = document.querySelector('.section__title_h1');
    // const timelineSettings = {
    //   staggerValue: 0.014,
    //   charsDuration: 0.5
    // };
    // const timeline = gsap.timeline({paused: true})
    //     .addLabel('start')
    //     // Stagger the animation of the home section chars
    //     .staggerTo( titleSplitting, timelineSettings.charsDuration, {
    //       ease: 'Power3.easeIn',
    //       y: '-100%',
    //       opacity: 0
    //     }, timelineSettings.staggerValue, 'start')
  }
}

</script>

<style lang="scss" scoped>
.section__title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-white;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 3rem;
    background-color: $color-black;
    bottom: 5vh;
  }
  &_h1 {
    text-align: center;
    text-transform: uppercase;
    line-height: $h1-font-size;
    overflow: hidden;
    @media (max-width: $breakpoints-max-mobile) {
      font-size: $h1-font-size * 0.5;
      line-height: $h1-font-size * 0.5;
    }
    .word {
      overflow: hidden;
      height: 100%;
    }
 }
}
</style>
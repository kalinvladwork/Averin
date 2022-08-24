<template>
  <div  class="home-page__container">

    <swiper class="swiper swiper-bg" :options="swiperOptionBg" ref="swiperBg">
      <swiper-slide
          v-for="slidebg in sliders.slidersbg"
          :key="slidebg.backgroundPhoto"
          :style="{backgroundImage:   'url(' + require('@/assets/img/photo/' + slidebg.backgroundPhoto + '') + ')' }">
        <div class="swiper-bg__opacity"></div>
      </swiper-slide>
      <div class="swiper-pagination swiper-bg__pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>

    <swiper class="swiper swiper-nav" :options="swiperOptionNav" ref="swiperNav">
      <swiper-slide
          class="swiper-nav__slide"
          v-for="(slidenav, index) in sliders.slidersnav"
          :key="slidenav.url">
        <MainNavItem :navitem="slidenav">
          <span class="nav_main__item__number">0{{index + 1}}</span>
        </MainNavItem>
        <Separator class="mobile-none"/>
      </swiper-slide>
      <div class="swiper-prev" slot="button-prev"></div>
      <div class="swiper-next " slot="button-next"></div>
    </swiper>
    <DownPicture class="mobile-only"/>
    <router-link class="back-to" to="/">back to main section</router-link>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Separator from "@/components/slider/Separator";
import MainNavItem from "@/components/slider/MainNavItem";
import DownPicture from "@/components/pages/chunks/DownPicture";

export default {
  name: "MainNav",
  components: {
    DownPicture,
    MainNavItem,
    Separator,
    Swiper,
    SwiperSlide
  },
  props: {
    sliders: {
      slidersbg: {backgroundPhoto: {}},
      slidersnav: {title: {}, url: {}, index: {}}
    }
  },
  data() {
    return {
      swiperOptionBg: {
        spaceBetween: 10,
        effect: 'fade',
        loop:true,
        loopedSlides: 4,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-next ',
          prevEl: '.swiper-prev'
        },
      },
      swiperOptionNav: {
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: optionSwiper('slidesPerView'),
        speed: 900,
        touchRatio: 0.2,
        mousewheel: true,
        slideToClickedSlide: true,
        slidesPerColumn:1,
        slidesPerColumnFill : 'row',
        direction: optionSwiper ('direction'),
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperBg = this.$refs.swiperBg.$swiper
      const swiperNav = this.$refs.swiperNav.$swiper
      swiperBg.controller.control = swiperNav
      swiperNav.controller.control = swiperBg
    })
  }
}
function optionSwiper (option) {
  let winWidth = screen.width;
  switch (option) {
    case 'direction':
      if (winWidth >= 576) {
        return 'horizontal';
      } else {
        return 'vertical';
      }
    case 'slidesPerView':
      if (winWidth >= 576) {
        return 2;
      } else {
        return 1;
      }
  }
}
</script>

<style lang="scss">
.home-page__container {
  position: relative;
}
.swiper-prev,
.swiper-next {
  z-index: 50;
  position: absolute;
  top: 0;
  width: 25vw;
  height: 100vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  outline: none;
  @media (max-width: $breakpoints-max-mobile) {
    display: none;
  }
}
.swiper-prev {
  left: 0;
  right: auto;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%);
}
.swiper-next  {
  right: 0;
  left: auto;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.9) 100%);
}

.swiper-bg {
  height: 100vh;
  z-index: 1;
  position: relative;
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  &__pagination {
    color: $color-white;
    @media (max-width: $breakpoints-max-mobile) {
      text-align: right;
      padding: 0 2rem 1vh;
      font-size: 1rem;
    }
  }
  &__opacity {
    width: 100%;
    height: 100%;
    background-color: $color-black;
    opacity: 0.4;
  }
}

.swiper-nav {
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
  top: 0;
  @media (max-width: $breakpoints-max-mobile) {
    flex-direction: column;
  }
  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .separator {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: -1rem;
    }
  }
}

.back-to {
  position: absolute;
  bottom: 2vh;
  left: 1vw;
  z-index: 100;
  color: $color-white;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: $breakpoints-max-mobile) {
  }
}
</style>
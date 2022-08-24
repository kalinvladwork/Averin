<template>

    <swiper
      class="gallery__body swiper"
      :options="swiperOptions">

      <swiper-slide
          class="gallery__item"
          v-for="img in Gallery.GalleryImg"
          :key="img.fileName">

        <picture>
          <source :srcset="require('@/assets/img/photo/' + img.fileName )" media="(max-width: 1366px)">
          <img :src="require('@/assets/img/photo/' + img.fileName )" :alt="img.alt">
        </picture>

      </swiper-slide>


    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
name: "GalleryBody",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    Gallery: {
      GalleryImg: {
        fileName: {}, alt: {}
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        freeMode: true,
        updateOnWindowResize: true,
        uniqueNavElements: true,
        grabCursor: true,
        observeParents: true,
        navigation: {
          nextEl: '.gallery__nav__next',
          prevEl: '.gallery__nav__prev',
        }
      }
    }
  },
}





</script>

<style lang="scss">
.gallery {
  &__body {
    display: flex;
    height: calc(100vh - 8rem);
    align-items: flex-end;
    @media (max-width: $breakpoints-max-mobile) {
      height: calc(50vh - 8rem);
    }
  }
  &__item{
    width: auto;
    max-height:calc(100vh - 8rem);
    align-items: flex-end;
    display: flex;
    @media (max-width: $breakpoints-max-mobile) {
      height: calc(50vh - 8rem);
    }
    img {
      max-height:calc(100vh - 8rem);
      @media (max-width: $breakpoints-max-mobile) {
        height: calc(50vh - 8rem);
      }
    }
  }
}
</style>

<template>
  <div class="burger">
    <nav class="burger__nav">
      <div class="burger__menu__wrap">
        <h2 class="burger__title__h2">Menu</h2>
        <ul class="burger__menu burger__menu-main">
          <router-link
              v-for="link in nav_links"
              :key="link.url"
              tag="li"
              active-class="active"
              class="burger__menu-main__li"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="link-to-cursor">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

      <div class="burger__menu-sub__wrap">
        <h3 class="burger__title__h3">
          <router-link to="/aesthetic">Aesthetic dentistry</router-link>
        </h3>
        <ul class="burger__menu burger__menu-sub">
          <router-link
              v-for="link in aesthetic_links"
              :key="link.url"
              tag="li"
              active-class="active"
              class="burger__menu-sub__li"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="link-to-cursor">{{link.title}}</a>
          </router-link>
        </ul>

        <h3 class="burger__title__h3">
          <router-link to="/regular">Regular dentistry</router-link>
        </h3>
        <ul class="burger__menu burger__menu-sub">
          <router-link
              v-for="link in regular_links"
              :key="link.url"
              tag="li"
              active-class="active"
              class="burger__menu-sub__li"
              :to="link.url"
              :exact="link.exact"
          >
            <a href="#" class="link-to-cursor">{{link.title}}</a>
          </router-link>
        </ul>
      </div>


    </nav>
    <div class="burger__img">

      <Picture :photo="photo"/>

    </div>

  </div>
</template>

<script>
import Picture from "@/components/pages/chunks/Picture";
export default {
  name: "Burger",
  components: {Picture},
  props: ['value'],
  data: () => ({
    nav_links: [
      {title: 'About Us', url: '/about', exact: true},
      {title: 'Safety etiquette', url: '/safety'},
      {title: 'Сontacts', url: '/сontacts'}
    ],
    aesthetic_links: [
      {title: 'Balancing face and smile silhouette', url: '/balancingface'},
      {title: '100 hours of silence and hand-crafting', url: '/handcrafting'},
      {title: 'Perfection of the porcelain fit', url: '/perfection'},
      {title: 'Before/after', url: '/before'}
    ],
    regular_links: [
      {title: 'Hygiene', url: '/hygiene'},
      {title: 'Perio-therapy', url: '/periotherapy'},
      {title: 'Restoration', url: '/restoration'},
      {title: 'Implants', url: '/implants'},
      {title: 'Sleep dentistry', url: '/sleepdentistry'},
      {title: 'Endo therapy', url: '/endotherapy'},
      {title: 'Invisalign', url: '/invisalign'}
    ],
    photo: {
      photoFileMobile: 'woman_2',
      photoFile: 'woman_4',
      photoAlt: 'Photo one woman'
    }
  })
}




</script>

<style lang="scss">
.burger {
  display: grid;
  background: $color-black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 110;
  grid-template-columns:  2fr 1fr ;
  padding: 10vh 4rem 2rem;
  transition: transform 500ms ease;
  transform: translateX(100%);
  .burger__open & {
    transform: translateX(0);
  }
  @media (max-width: $breakpoints-max-desktop) {
    padding: 5rem 3rem 0.5rem;
  }
  @media (max-width: $breakpoints-max-tablet) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 7rem 5rem 0.5rem;
  }
  @media (max-width: $breakpoints-max-mobile) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 5rem 1rem 0.5rem;
  }
  &__nav {
    display: grid;
    grid-template-columns: 50% 50% ;
    @media (max-width: $breakpoints-max-tablet) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $breakpoints-max-mobile) {
      grid-template-columns: 1fr 1fr;
    }
  }
  &__menu__wrap {

  }
  &__menu-sub__wrap {
    grid-column-start: 2;
  }
  &__img {
    padding: 60px 0;
    height: 80vh;
    overflow: hidden;
    picture {
      height: 100%;
    }
    img{
      //width: 100%;
      height: 100%;
    }
    @media print,screen and (max-width: 768px) {
      display: none;
    }
  }
  &__title {
    &__h2 {
      text-transform: uppercase;
      color: $color-white;
      font-style: normal;
      font-weight: normal;

    }
    &__h3 {
      font-weight: bold;
      color: $color-white;
      font-style: normal;
      a {
        color: $color-white;
        text-decoration: none;
        &:hover {
          color: $color-secondary;
        }
        &:active {
          color: $color-secondary;
        }
        &.active {
          color: $color-secondary;
        }
      }
    }
  }
  &__menu {
    a {
      color: $color-white;
      text-decoration: none;
      &:hover {
        color: $color-secondary;
      }
      &:active {
        color: $color-secondary;
      }
      &.active {
        color: $color-secondary;
      }
    }
    &-main {
      &__li {
        @media (max-width: $breakpoints-max-tablet) {
          margin-bottom: 1.5rem;
        }
      }
      a {
        font-size: $h3-font-size;
        line-height: 2rem;
      }
    }
    &-sub {
      &__li {
        @media (max-width: $breakpoints-max-tablet) {
          margin-bottom: 1.5rem;
        }
      }
      a {
        line-height: 1.5rem;
      }
    }
  }

}
</style>

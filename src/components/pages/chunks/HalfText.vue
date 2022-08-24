<template>
  <div class="section__photo-text__text" :class="{'bg_grey': HalfText.isGrey}">
    <div class="photo-text__text__center">
      <h2  class="gs_reveal">
        {{HalfText.title}}
      </h2>
      <p  class="gs_reveal">
        {{HalfText.text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "HalfText",
  props: {
    HalfText: {
      isGrey: '',
      title: {
        default: 'woman_2.jpg'
      },
      text: {
        default: 'Default photo'
      }
    }
  }
}
</script>

<style lang="scss">
.section {
  &__photo-text {
    &__text {
      padding: 5vw;
      width: 100%;
      height: inherit;
      display: flex;
      align-items: center;
      @media print,screen and (min-width: 768px) {
        width: 50%;
      }
      &.bg_grey {
        background-color: $color-light-grey;
        @media  (max-width: $breakpoints-max-desktop) {
          text-align: center;
        }
      }
    }
  }
}
</style>
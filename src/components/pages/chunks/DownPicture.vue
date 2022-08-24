<template>
    <span class="down-picture__wrap">
      <svg viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.725 1.19424L7.87699 5.2934C7.51813 5.54495 6.93894 5.54124 6.58333 5.28511L0.788409 1.11129C0.432803 0.855165 0.435442 0.443616 0.794303 0.192071C1.15316 -0.0594734 1.73235 -0.0557595 2.08796 0.200367L7.239 3.91043L12.4372 0.266728C12.7961 0.0151833 13.3752 0.0188972 13.7309 0.275023C14.0865 0.53115 14.0838 0.942698 13.725 1.19424Z" />
      </svg>
      <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.725 1.19424L7.87699 5.2934C7.51813 5.54495 6.93894 5.54124 6.58333 5.28511L0.788409 1.11129C0.432803 0.855165 0.435442 0.443616 0.794303 0.192071C1.15316 -0.0594734 1.73235 -0.0557595 2.08796 0.200367L7.239 3.91043L12.4372 0.266728C12.7961 0.0151833 13.3752 0.0188972 13.7309 0.275023C14.0865 0.53115 14.0838 0.942698 13.725 1.19424Z" />
      </svg>
    </span>
</template>

<script>
export default {
name: "DownPicture",
}
</script>

<style lang="scss" scoped>
.down-picture__wrap {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 95vh;
  left: 50%;
  margin-left: -0.5rem;
  z-index: 100;
  &.fixed-home-page {
    position: fixed;
  }
  svg {
    width: 1rem;
    height: 0.4rem;
    path {
      animation: color-1 1s infinite;
    }
    &:last-child {
      path {
        animation: color-2 1s infinite;
      }
    }
  }
  @media (min-width: $breakpoints-max-mobile) {
    &.mobile-only {
      display: none;
    }
  }

}
@keyframes color-1 {
  0% {
    fill: $color-secondary;
  }
  50% {
    fill: $color-white;
  }
  100% {
    fill: $color-secondary;
  }
}
@keyframes color-2 {
  0% {
    fill: $color-white;
  }
  50% {
    fill: $color-secondary;
  }
  100% {
    fill: $color-white;
  }
}
</style>
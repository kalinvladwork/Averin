<template>
  <div class="separator">
    <div class="separator__cross"></div>
  </div>
</template>

<script>
export default {
name: "Separator"
}
</script>

<style lang="scss" scoped>
.separator {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 3rem;
  height: 3rem;
  margin-top: -3rem;
  @media (max-width: $breakpoints-max-tablet) {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -2.5rem;
  }
  &__big {
    width: 5rem;
    height: 5rem;
    margin-top: -5rem;
    @media (max-width: $breakpoints-max-tablet) {
      width: 2.5rem;
      height: 2.5rem;
      margin-top: -2.5rem;
    }
  }
  &__cross {
    width: 100%;
    border-bottom: 1px solid $color-white;
    position: relative;
    margin-top: 100%;
    margin-left: 0;
    transform: rotate(225deg);
    box-sizing: border-box;
    &:after {
      content: '';
      border-bottom: 1px solid $color-white;
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      transform: rotate(-90deg);
    }
  }
}
</style>
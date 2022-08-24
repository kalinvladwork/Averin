<template>
  <div class="loader-click">
      <p class="loader-click__title">Elevating <br class="mobile-only"> smile-making to <br> <em class="color-secondary">the level of art</em></p>
      <p class="loader-click__prompt">Click anywhre to continue</p>
  </div>
</template>

<script>
export default {
name: "LoaderClick"
}


document.addEventListener("click", () => {
  document.body.classList.remove('preloaded_hiding');
})

</script>

<style lang="scss" scoped>
.loader-click {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: $color-black;;
  z-index: 1002;
  display: none;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  .preloaded_hiding &{
    transition: 0.3s opacity;
    opacity: 1;
    display: flex;
  }
  .preloaded &{
    display: flex;
    opacity: 1;
  }
  &__title {
    text-align: center;
    font-size: 2.5rem;
    font-family: $title-font-family;
    color: $color-white;
    em {
      font-family: $title-italic-font-family;
    }
  }
  &__prompt {
    text-transform: uppercase;
    text-align: center;
    color: #696868;
    font-size: 0.8rem;
    letter-spacing: 0.095em;
  }
}
</style>
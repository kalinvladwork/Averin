<template>
  <footer class="footer">
    <div class="footer_col">
      <router-link class="footer__link" to="">procedures</router-link>
      <router-link class="footer__link" to="/about">about us</router-link>
    </div>
    <div class="footer_col">
      <a class="footer__link link-to-cursor" href="mailto:averindc@gmail.com">averindc@gmail.com</a>
      <a class="footer__link link-to-cursor" href="#">facebook</a>
      <a class="footer__link link-to-cursor" href="#">instagram</a>
    </div>

  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss">
footer.footer {
  background: $color-light-grey;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: $color-light-black;
  font-size: $h6-font-size;
  padding: 1.2rem;
  height: 3rem;
  z-index: 100;
  @media (max-width: $breakpoints-max-mobile) {
    height: 5rem;
  }
}
.footer_col {
  display: flex;
  @media (max-width: $breakpoints-max-mobile) {
    flex-direction: column;
  }
}
.footer__link {
  color: $color-light-black;
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
}
</style>

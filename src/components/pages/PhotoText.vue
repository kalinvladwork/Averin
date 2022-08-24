<template>
  <section class="section__pages section__photo-text">
    <HalfPhoto :half-photo="PhotoTextContent.HalfPhoto"/>
    <HalfText :half-text="PhotoTextContent.HalfText" />
  </section>
</template>

<script>
import HalfPhoto from "@/components/pages/chunks/HalfPhoto";
import HalfText from "@/components/pages/chunks/HalfText";
export default {
name: "Photo-text",
  components: {HalfText, HalfPhoto},
  props: {
    PhotoTextContent: {

    }
  }
}
</script>

<style lang="scss">
.section {
  &__photo-text {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: column;
    overflow: hidden;
    @media print,screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
}

</style>
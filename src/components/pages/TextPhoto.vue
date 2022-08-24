<template>
  <section class="section__pages section__photo-text">
    <HalfText :half-text="PhotoTextContent.HalfText"/>
    <HalfPhoto :half-photo="PhotoTextContent.HalfPhoto"/>
  </section>
</template>

<script>
import HalfPhoto from "@/components/pages/chunks/HalfPhoto";
import HalfText from "@/components/pages/chunks/HalfText";
export default {
name: "TextPhoto",
  components: {HalfText, HalfPhoto},
  props: {
    PhotoTextContent: {

    }
  }
}
</script>

<style lang="scss">

</style>
<template>
  <picture>
    <source :srcset="require(`@/assets/img/photo/${photo.photoFileMobile+'.jpg'}`)+', '+require(`@/assets/img/photo/${photo.photoFileMobile+'@2.jpg'}`)+' 2x'" media="(max-width: 576px)">
    <img :src="require(`@/assets/img/photo/${photo.photoFile+'.jpg'}`)" :srcset="require(`@/assets/img/photo/${photo.photoFile+'@2.jpg'}`)+' 2x'" :alt="photo.photoAlt">
  </picture>
</template>

<script>
export default {
name: "Picture",
  props: {
    photo: {
      photoFileMobile:{
        default: 'woman_3',
        required: false
      },
      photoFile: {
        default: 'woman_3',
        required: false
      },
      photoAlt: {
        default: 'Default photo',
        required: false
      }
    }
  }
}
</script>

<style scoped>

</style>
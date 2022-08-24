<template>
  <div class="bg-video__container">
    <video class="bg-video" poster="../../../assets/video/the-prodigy.jpg" autoplay muted loop>
      <source src="../../../assets/video/the-prodigy.webm" type='video/webm'>
      <source src="../../../assets/video/the-prodigy.mp4" type='video/mp4'>
      <p> Your browser doesn't support HTML5 video. Here is a
        <a target="_blank" href="../../../assets/video/the-prodigy.mp4">link to the
          video</a> instead.
      </p>
    </video>
  </div>
</template>


<script>
export default {
name: "Video"
}
</script>

<style lang="scss" >
.bg-video {
  visibility: visible;
  width: auto;
  min-width: 100%;
  min-height: 100%;
  margin: 0 auto;
  -webkit-transform-origin: center;
  transform-origin: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  z-index: -2;
  &__container {
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    height: 100%;
    width: 100%;
    margin: 0 auto;
    -webkit-transform-origin: center;
    transform-origin: center;
    z-index: -2;
  }
}
</style>
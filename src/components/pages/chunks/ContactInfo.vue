<template>
  <div class="contacts__info-section">
    <h5 class="color-secondary">{{title}}</h5>
    <a class="contacts__link link-to-cursor"  title="{{title_link}}" href="{{ href }}">
      {{ info }}
    </a>
  </div>
</template>

<script>
export default {
name: "ContactInfo",
  data: () => ({
    informations: [
      {}
    ]
  })
}
</script>

<style>

</style>

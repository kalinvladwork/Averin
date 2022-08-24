<template>
  <div :class="{burger__open: isOpen}" class="app-slider-layout">
    <Header @burger="isOpen = !isOpen"/>
    <Burger  v-model="isOpen"/>
    <main class="app-content" >
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Burger from "@/components/Burger";

export default {
  name: 'slider-layout',
  data: () => ({
    isOpen: false
  }),
  components: {
    Header,
    Burger
  }
}
</script>

<style lang="scss" scoped>
.app-slider-layout {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
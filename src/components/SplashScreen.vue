<template>
  <div class="splash-screen">
    <BgImageComponent />
    <div class="content-wrapper">
      <img src="palmalogo.png" alt="Logo" class="splash-logo">
    </div>
  </div>
</template>

<script>
import BgImageComponent from '@/components/BgImageComponent.vue';

export default {
  name: 'SplashScreen',
  components: {
    BgImageComponent
  }
}
</script>

<style scoped>
.splash-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
}

.splash-logo {
  width: 150px; /* Adjust the size as needed */
  margin-bottom: 20px; /* Adjust the spacing as needed */
}
</style>

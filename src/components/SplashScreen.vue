<template>
  <div class="splash-screen">
    <img src="/src/assets/palmalogo.png" alt="Logo" class="splash-logo">
  </div>
</template>

<script>
export default {
  name: 'SplashScreen'
}
</script>

<style scoped>
.splash-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/src/assets/bg.png') no-repeat center center;
  background-size: cover;
}

.splash-logo {
  width: 150px; /* Adjust the size as needed */
}
</style>

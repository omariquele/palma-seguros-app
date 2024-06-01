<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>

<style>
#q-app {
  height: 100%;
  background: url('/src/assets/bg.png') no-repeat center center;
  background-size: cover;
}
</style>

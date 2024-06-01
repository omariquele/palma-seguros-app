<template>
  <q-page class="menu-page text-center">
    <BgImageComponent />
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">


      <div class="page-title text-bold">
        Menu Principal
      </div>

      <div class="q-gutter-y-md button-group">
        <q-btn
          to="/seguro-particular"
          unelevated
          label="Seguro Particular"
          color="secondary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-account-group"
        />
        <q-btn
          to="/empresas"
          unelevated
          label="Seguro Empresas"
          color="secondary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-domain"
        />
        <q-btn
          to="/sinistro"
          unelevated
          label="Sinistro"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-tow-truck"
        />
        <q-btn
          to="/rastreio"
          unelevated
          label="Rastreio"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-map-marker"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import BgImageComponent from 'src/components/BgImageComponent.vue';

export default {
  name: 'MenuPage',
  components: {
    BgImageComponent
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.menu-page {
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
  justify-content: center;
  text-align: center;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  z-index: 1;
}

.logo {
  width: 200px; /* Adjust the size as needed */
  margin-bottom: 6px; /* Adjust the spacing as needed */
}

.page-title {
  font-size: 2em;
  color: white;
  background-color: $accent;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.full-width {
  width: 100%;
  margin-bottom: 10px;
}
</style>

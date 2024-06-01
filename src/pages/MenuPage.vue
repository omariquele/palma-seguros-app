<template>
  <q-page class="menu-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="/src/assets/palmalogo.png" alt="Logo" class="logo">

      <div class="page-title text-bold">
        Menu Principal
      </div>


      <div class="q-gutter-y-md button-group">
        <q-btn
          to="/seguro-particular"
          unelevated
          label="Seguro Particular"
          color="primary"
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
          color="primary"
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
export default {
  name: 'MenuPage',
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.menu-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/src/assets/bg.png') no-repeat center center;
  background-size: cover;
}

.content-wrapper {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.logo {
  width: 200px;
  margin-bottom: 20px;
}

.highlight {
  background-color: rgba(74, 133, 79, 0.3);
  padding: 5px 10px;
  border-radius: 5px;
  color: $primary;
  font-weight: bold;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-width {
  width: 100%;
}
.page-title {
  font-size: 2em;
  color: #808080

}

</style>

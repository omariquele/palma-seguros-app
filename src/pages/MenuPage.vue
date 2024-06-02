<template>
  <q-page class="menu-page text-center">
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
export default {
  name: 'MenuPage'
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.menu-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('bg.png') no-repeat center center;
  background-size: cover;
}

.content-wrapper {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}

.logo {
  width: 150px; /* Adjust the size as needed */
  margin-bottom: 10px; /* Adjust the spacing as needed */
}

.page-title {
  font-size: 1.5em; /* Adjust the size as needed */
  color: white;
  background-color: $accent;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px; /* Adjust the spacing as needed */
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.full-width {
  width: 100%;
  margin-bottom: 10px;
}

/* Media queries for responsive design */
@media (max-width: 600px) {
  .content-wrapper {
    padding: 0 10px;
  }

  .logo {
    width: 100px;
    margin-bottom: 5px; /* Further reduced spacing */
  }

  .page-title {
    font-size: 1.2em;
    padding: 3px 8px;
    margin-bottom: 5px; /* Further reduced spacing */
  }

  .full-width {
    margin-bottom: 5px;
  }
}
</style>

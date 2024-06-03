<template>
  <q-page class="mapview-page">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">
      <div class="page-title text-bold">
        Map View
      </div>
      <!-- Add your map view content here -->
      <div class="map-container">
        <p>A ultima localizacao da sua viatura: {{ matricula }}</p>
      </div>

      <div class="button-group">
        <q-btn
          @click="goBack"
          unelevated
          label="Voltar"
          color="white"
          text-color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MapviewPage',
  computed: {
    matricula() {
      return this.$route.query.matricula || '';
    }
  },
  methods: {
    goBack() {
      this.$router.push('/rastreio');
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

$primary-color: rgba(209, 36, 33, 1);
$grey-color: rgba(128, 128, 128, 1);
$white-color: rgba(255, 255, 255, 1);

.mapview-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('~@/assets/bg.png') no-repeat center center;
  background-size: cover;
}

.content-wrapper {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.page-title {
  font-size: 2em;
  color: white;
  background-color: $secondary;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
}

.map-container {
  background-color: $white-color;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-width {
  width: 100%;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .content-wrapper {
    padding: 0 10px;
  }

  .page-title {
    font-size: 1.5em;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  .full-width {
    margin-bottom: 5px;
  }
}
</style>

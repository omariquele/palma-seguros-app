<template>
  <q-page class="mapview-page">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">
      <div class="page-title text-bold">
        Map View
      </div>
      <!-- Add your map view content here -->
      <div class="map-container">
        <p>A última localização da sua viatura: {{ matricula }}</p>
        <img
          src="map-image.png"
          alt="Map Image"
          class="map-image"
          @click="openDialog"
        >
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

    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>

          <img src="palma.png" alt="Logo" class="logo">
        </q-card-section>

        <q-card-actions align="center" class="column">
          <q-btn
            @click="bloquearViatura"
            unelevated
            label="Bloquear Viatura"
            color="primary"
            rounded
            size="xl"
            no-caps
            class="full-width"
            icon="mdi-car-door-lock"
          />
          <q-btn
            @click="reportarFurto"
            unelevated
            label="Reportar Furto"
            color="secondary"
            rounded
            size="xl"
            no-caps
            class="full-width"
            icon="mdi-robot-angry"
          />
          <q-btn
            @click="closeDialog"
            unelevated
          
          label="Voltar"
          color="white"
          text-color="primary"
          rounded
          size="xl"
          no-caps
          class="back-button"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'MapviewPage',
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    matricula() {
      return this.$route.query.matricula || '';
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    bloquearViatura() {
      alert('Bloquear Viatura clicked');
      this.closeDialog();
    },
    reportarFurto() {
      alert('Reportar Furto clicked');
      this.closeDialog();
    },
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

.map-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  margin-top: 10px;
  border: 2px solid $positive; /* Red border */
  width: 100%;
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

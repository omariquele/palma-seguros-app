<template>
  <q-page class="rastreio-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">
      <div class="page-title text-bold">
        Rastreio
      </div>

      <div class="input-group">
        <q-input
        color="primary"
        bg-color="info"
          filled
          label="Introduza a matrícula"
          v-model="matricula"
          class="full-width"
          input-style="font-size: 20pt"
          mask="AAA - ### - AA"
          hint="Formato: AAA - 123 - MP"
        />
      </div>

      <div class="button-group">
        <q-btn
          @click="rastrear"
          unelevated
          label="Rastrear"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-car-search"
        />
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

    <q-dialog v-model="searchingDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Procurando Matrícula: {{ matricula }}</div>
          <q-linear-progress :value="progress" height="10px" class="q-mt-md" />
          <q-spinner class="q-mt-md" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'RastreioPage',
  data() {
    return {
      matricula: '',
      searchingDialog: false,
      progress: 0
    };
  },
  methods: {
    rastrear() {
      this.searchingDialog = true;
      this.startProgress();
    },
    startProgress() {
      this.progress = 0;
      const interval = setInterval(() => {
        if (this.progress < 1) {
          this.progress += 0.01;
        } else {
          clearInterval(interval);
          this.searchingDialog = false;
          this.$router.push({ path: '/mapview', query: { matricula: this.matricula } });
        }
      }, 100);
    },
    goBack() {
      this.$router.push('/menu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

$primary-color: rgba(209, 36, 33, 1);
$grey-color: rgba(128, 128, 128, 1);
$white-color: rgba(255, 255, 255, 1);

.rastreio-page {
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



.input-group {
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

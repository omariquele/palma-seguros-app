<template>
  <q-page class="sinistro-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">
      <div class="page-title text-bold">
        Sinistro
      </div>

      <div class="button-group">
        <q-btn
          @click="participarSinistro"
          unelevated
          label="Participar Sinistro"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-car-wrench"
        />
        <q-btn
          @click="baixarFormulario"
          unelevated
          label="Baixar Formulário"
          color="secondary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-file-download"
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
          class="back-button"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SinistroPage',
  methods: {
    participarSinistro() {
      // Logic for participating in a sinistro can be added here
      alert('Participar Sinistro clicked');
    },
    baixarFormulario() {
      window.open('https://vitae-erp.com/FORMULARIO%20DE%20SINISTROS%20AUTOMOVEL%20-%201A%20-%20Copy.pdf', '_blank');
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

.sinistro-page {
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

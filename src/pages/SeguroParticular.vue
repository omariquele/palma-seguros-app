<template>
  <q-page class="seguro-particular-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">
      <div class="page-title text-bold">
        Seguro Particular
      </div>

      <div class="q-gutter-y-md button-group">
        <q-btn
          to="/seguro-automovel"
          unelevated
          label="Automóvel"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-car"
        />
        <q-btn
          to="/seguro-multirriscos"
          unelevated
          label="Multirriscos"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-home"
        />
        <q-btn
          to="/seguro-acidentes-pessoais"
          unelevated
          label="Acidentes Pessoais"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-wheelchair"
        />
        <q-btn
          to="/seguro-viagem"
          unelevated
          label="Viagem"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-airplane"
        />
        <q-btn
          to="/seguro-bagagem"
          unelevated
          label="Bagagem"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-bag-personal"
        />
        <q-btn
          to="/financiamento-automovel"
          unelevated
          label="Financiamento Automóvel"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
          icon="mdi-cash"
        />
      </div>

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
  </q-page>
</template>

<script>
export default {
  name: 'SeguroParticularPage',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.seguro-particular-page {
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 10px; /* Reduced spacing */
}

.page-title {
  font-size: 1.5em; /* Adjust the size as needed */
  color: white;
  background-color: $secondary;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px; /* Reduced spacing */
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

.back-button {
  margin-top: 10px;
  border: 2px solid $positive; /* Red border */
  width: 100%;
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
    font-size: 1.8em;
    padding: 3px 8px;
    margin-bottom: 5px; /* Further reduced spacing */
  }

  .full-width {
    margin-bottom: 5px;
  }

  .back-button {
    margin-top: 5px;
  }
}
</style>

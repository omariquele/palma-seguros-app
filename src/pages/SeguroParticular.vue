<template>
  <q-page class="seguro-particular-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="/src/assets/palmalogo.png" alt="Logo" class="logo">

      <div class="page-title text-bold">
        Seguro Particular
      </div>

      <div class="q-gutter-y-md button-group">
        <q-btn
          to="/seguro-automovel"
          unelevated
          label="Seguro de Automóvel"
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
          label="Seguro Multirriscos"
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
          label="Seguros de Acidentes Pessoais"
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
          label="Seguro de Viagem"
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
          label="Seguro de Bagagem"
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

.back-button {
  margin-top: 20px;
  border: 2px solid $primary; /* Red border */
}

.page-title {
  font-size: 2em;
  color: #808080


}
</style>

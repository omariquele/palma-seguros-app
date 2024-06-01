<template>
  <div class="welcome-page">
    <img src="/src/assets/palmalogo.png" alt="Logo" class="logo">
    <div class="welcome-text">
      Caro utilizador da Palma Seguros:
      <div>Com este aplicativo você já:</div>
      <div class="text-left custom-text-style">
        <ul>
          <li>Pagar Apolices</li>
          <li>Visualizar o documento Apolice</li>
          <li>Ver a sua Viatura em tempo Real</li>
          <li>Participar Sinistros</li>
          <li>E muito mais..</li>
        </ul>
      </div>
    </div>
    <q-btn @click="goToMenu" class="continue-button" label="Continuar" rounded color="primary" />
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    goToMenu() {
      this.$router.push('/menu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.welcome-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/bg.png') no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
}

.logo {
  width: 200px;
  margin-bottom: 20px;
  z-index: 1;
}

.welcome-text {
  font-size: 1.8em;
  color: $primary;
  z-index: 1;
}

.custom-text-style {
  color: $accent;
  font-size: 18px;
  z-index: 1;
}

ul {
  color: $secondary;
}

.continue-button {
  margin-top: 20px;
  z-index: 1;
}
</style>

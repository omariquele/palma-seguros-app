<template>
  <div class="welcome-page">
    <BgImageComponent />
    <div class="content-wrapper">
      <img src="palmalogo.png" alt="Logo" class="logo">
           <div class="welcome-text text-bold">
        Caro utilizador da Palma Seguros:
        <div>Com este aplicativo você pode:</div>
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
      <q-btn
        @click="goToMenu"
        class="continue-button"
        label="Continuar..."
        rounded
        color="primary"
        size="xl"
      />
    </div>
  </div>
</template>

<script>
import BgImageComponent from 'src/components/BgImageComponent.vue';
export default {
  name: 'WelcomePage',
  components: {
    BgImageComponent
  },
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
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
}

.logo {
  width: 200px; /* Adjust the size as needed */
  margin-bottom: 20px; /* Adjust the spacing as needed */
}

.welcome-text {
  font-size: 1.8em;
  color: $primary;
}

.custom-text-style {
  font-size: 0.7em;
  color: $info;
  background-color: $info;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
}

ul {
  color: $secondary;
}

.continue-button {
  margin-top: 20px;
}
</style>

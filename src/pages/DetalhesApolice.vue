<template>
  <q-page class="detalhes-apolice-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">

      <div class="page-title text-bold">
        Detalhes da Apólice
      </div>

      <div class="details">
        <table class="details-table">
          <tbody>
            <tr>
              <td>Matrícula:</td>
              <td>AAA-123MC</td>
            </tr>
            <tr>
              <td>Nome do Cliente:</td>
              <td>Olegario Mariquele</td>
            </tr>
            <tr>
              <td>Marca da Viatura:</td>
              <td>HONDA FIT</td>
            </tr>
            <tr>
              <td>Nr do Motor:</td>
              <td>1KR0000000</td>
            </tr>
            <tr>
              <td>Nr de Chassis:</td>
              <td>1KSZZZZZZZ</td>
            </tr>
            <tr>
              <td>Seguro:</td>
              <td>Contra Terceiros</td>
            </tr>
            <tr>
              <td>Data de Emissão:</td>
              <td>12/01/2024</td>
            </tr>
            <tr>
              <td>Data de Validade:</td>
              <td>12/06/2024</td>
            </tr>
            <tr>
              <td>Apólice em vigor:</td>
              <td>PALMA/PVT/061-666</td>
            </tr>
            <tr>
              <td>Total a pagar:</td>
              <td>1200.00mt</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="page-title text-bold">
        Meios de Pagamento
      </div>
      <div class="button-group">
        <q-btn
          unelevated
          rounded
          size="xl"
          no-caps
          class="inline-button"
        >
          <img src="mpesa-logo-vd.png" alt="Mpesa Logo" class="payment-logo">
        </q-btn>
        <q-btn
          unelevated
          rounded
          size="xl"
          no-caps
          class="inline-button"
        >
          <img src="emola.png" alt="EMola Logo" class="payment-logo">
        </q-btn>
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
          class="full-width back-button"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DetalhesApolicePage',

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

$primary-color: rgba(209, 36, 33, 1);
$grey-color: rgba(128, 128, 128, 1);
$white-color: rgba(255, 255, 255, 1);

.detalhes-apolice-page {
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

.logo {
  width: 200px;
  margin-bottom: 20px;
}

.page-title {
  font-size: 2em;
  color: white;
  background-color: $primary;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
}

.details {
  background-color: $white-color;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
}

.details-table td {
  border-bottom: 1px solid $grey-color;
  padding: 10px;
}

.details-table td:first-child {
  text-align: left;
  font-weight: bold;
}

.details-table td:last-child {
  text-align: right;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.inline-button {
  width: 45%;
}

.payment-logo {
  width: 100px;
  height: auto;
}

.back-button {
  border: 2px solid $primary-color; /* Red border */
  color: $primary-color; /* Red text */
}
</style>

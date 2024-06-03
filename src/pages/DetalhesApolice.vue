<template>
  <q-page class="detalhes-apolice-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
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
              <td>Cliente:</td>
              <td>Olegario Mariquele</td>
            </tr>
            <tr>
              <td>Viatura:</td>
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
              <td>Emissão:</td>
              <td>12/01/2024</td>
            </tr>
            <tr>
              <td>Validade:</td>
              <td>12/06/2024</td>
            </tr>
            <tr>
              <td>Apólice:</td>
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
          @click="openPaymentDialog('mpesa')"
          unelevated
          rounded
          size="xl"
          no-caps
          class="inline-button"
        >
          <img src="mpesa-logo-vd.png" alt="Mpesa Logo" class="payment-logo">
        </q-btn>
        <q-btn
          @click="openPaymentDialog('emola')"
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

    <!-- Payment Dialog -->
    <q-dialog v-model="paymentDialog">
      <q-card>
        <q-card-section>
          <div class="text-center">
            <img :src="dialogLogo" alt="Payment Logo" class="dialog-logo">
          </div>
          <q-form @submit="onPaymentSubmit" class="q-pt-lg">
            <q-input
              outlined
              v-model="preferedAmount"
              type="number"
              label="Valor a pagar"
              input-style="font-size: 20pt"
              lazy-rules
              :rules="[
                val => val && val > 0 || 'Por favor, insira algum valor',
                val => val && val <= amount || 'O valor a pagar não pode ser superior ao valor da factura'
              ]"
            />
            <q-input
              outlined
              v-model="phone"
              label="Número de Telefone"
              lazy-rules
              input-style="font-size: 20pt"
              mask="#########"
              :rules="[ val => val && val.length > 0 || 'Por favor, insira o número']"
            />
            <div class="q-gutter-y-md">
              <q-btn
                type="submit"
                :color="paymentType === 'mpesa' ? 'red' : 'orange'"
                unelevated
                label="Confirmar"
                rounded
                size="lg"
                no-caps
                class="full-width"
              />
              <q-btn
                @click="paymentDialog = false"
                flat
                icon="arrow_left"
                label="Cancelar"
                color="primary"
                rounded
                size="md"
                no-caps
                class="full-width"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Confirmation Dialog -->
    <q-dialog v-model="confirmationDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Confirme o pin no seu celular</div>
          <q-linear-progress :value="progress" height="10px" class="q-mt-md" />
          <q-spinner class="q-mt-md" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'DetalhesApolicePage',
  data() {
    return {
      paymentDialog: false,
      confirmationDialog: false,
      paymentType: '',
      preferedAmount: 0,
      amount: 1200, // example amount
      phone: '',
      dialogLogo: '',
      progress: 0
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    openPaymentDialog(type) {
      this.paymentType = type;
      this.dialogLogo = type === 'mpesa' ? 'mpesa-logo-vd.png' : 'emola.png';
      this.preferedAmount = this.amount; // set default amount
      this.paymentDialog = true;
    },
    onPaymentSubmit() {
      this.paymentDialog = false;
      this.confirmationDialog = true;
      this.startProgress();
    },
    startProgress() {
      this.progress = 0;
      const interval = setInterval(() => {
        if (this.progress < 1) {
          this.progress += 0.01;
        } else {
          clearInterval(interval);
          this.confirmationDialog = false;
          this.$router.push('/apolice');
        }
      }, 100);
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

.page-title {
  font-size: 2em;
  color: white;
  background-color: $primary-color;
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
  background-image: url('palmalogo.png'); /* Add the logo as background */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%; /* Adjust the size as needed */
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

.dialog-logo {
  width: 150px;
  height: auto;
}

.back-button {
  border: 2px solid $primary-color; /* Red border */
  color: $primary-color; /* Red text */
}

.full-width {
  width: 100%;
}
</style>

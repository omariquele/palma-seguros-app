<template>
  <q-page class="seguro-automovel-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo">


      <div class="page-title text-bold">
        Seguro Automóvel
      </div>

      <div class="q-gutter-y-md input-group">
        <q-input
          filled
          label="Introduza a matrícula"
          v-model="matricula"
          class="full-width"
          input-style="font-size: 20pt"
          @input="validateMatricula"
        />
        <q-input
          filled
          label="Introduza o seu número de celular"
          v-model="celular"
          class="full-width"
          type="tel"
          :prefix="phonePrefix"
          input-style="font-size: 20pt"
          @input="validateNumber"
        >

        </q-input>
        <div v-if="celularError" class="error">{{ celularError }}</div>
      </div>

      <div class="button-group">
        <q-btn
          @click="openOtpDialog"
          unelevated
          label="Continuar"
          color="primary"
          rounded
          size="xl"
          no-caps
          class="full-width"
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
          class="full-width back-button"
        />
      </div>
    </div>

    <q-dialog v-model="otpDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira o código OTP enviado para o seu celular</div>
          <q-spinner v-if="loading" />
          <div v-else class="otp-inputs">
            <q-input
              v-for="(digit, index) in otp"
              :key="index"
              v-model="otp[index]"
              maxlength="1"
              type="tel"
              class="otp-input"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Verificar" color="primary" @click="verifyOtp" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'SeguroAutomovelPage',
  data() {
    return {
      matricula: '',
      celular: '',
      phonePrefix: '+258',
      celularError: '',
      otpDialog: false,
      otp: Array(4).fill(''),
      loading: true
    };
  },
  methods: {
    continuar() {
      if (!this.isValidCelular()) {
        this.celularError = 'Número de celular inválido';
      } else {
        this.celularError = '';
        this.openOtpDialog();
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    validateMatricula() {
      const regex = /^[A-Z]{3}-\d{3}-[A-Z]{2}$/;
      this.matricula = this.matricula.toUpperCase().replace(/[^A-Z0-9-]/g, '');
      if (this.matricula.length > 3 && this.matricula[3] !== '-') {
        this.matricula = this.matricula.slice(0, 3) + '-' + this.matricula.slice(3);
      }
      if (this.matricula.length > 7 && this.matricula[7] !== '-') {
        this.matricula = this.matricula.slice(0, 7) + '-' + this.matricula.slice(7);
      }
      if (!regex.test(this.matricula) && this.matricula.length === 9) {
        this.matricula = this.matricula.slice(0, -1);
      }
    },
    validateNumber() {
      // Remove non-numeric characters, except for the prefix
      const prefix = this.phonePrefix;
      const allowedPrefixes = ['82', '83', '84', '85', '86', '87'];
      let number = this.celular.replace(/\D/g, '').replace(prefix, '');

      // Ensure the number starts with one of the allowed prefixes and has exactly 9 digits after the prefix
      if (number.length > 9) {
        number = number.slice(0, 9);
      }

      const prefixPart = number.slice(0, 2);
      if (!allowedPrefixes.includes(prefixPart)) {
        number = '';
      }

      this.celular = prefix + number;
    },
    isValidCelular() {
      const prefix = this.phonePrefix;
      const allowedPrefixes = ['82', '83', '84', '85', '86', '87'];
      const number = this.celular.replace(prefix, '');
      const prefixPart = number.slice(0, 2);
      return number.length === 9 && allowedPrefixes.includes(prefixPart);
    },
    openOtpDialog() {
      this.loading = true;
      this.otpDialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 6000);
    },
    verifyOtp() {
    const otpCode = this.otp.join('');
    if (otpCode.length === 4) {
      // Implement OTP verification logic
      console.log('OTP Code:', otpCode);
      // Navigate to Detalhes da Apolice page
      this.$router.push('/detalhes-apolice');
    } else {
      console.error('OTP is incomplete');
    }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

$primary-color: rgba(209, 36, 33, 1);
$grey-color: rgba(128, 128, 128, 1);
$white-color: rgba(255, 255, 255, 1);

.seguro-automovel-page {
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
}

.logo {
  width: 300px;
  margin-bottom: 20px;
}

.page-title {
  font-size: 2em;
  color: white;
  background-color: $accent;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
}

.highlight {
  color: white;
}

.input-group {
  margin-bottom: 20px;
}

.full-width {
  width: 100%;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  margin-top: 10px;
  border: 2px solid $primary-color; /* Red border */
  color: $primary-color; /* Red text */
}

.error {
  color: $primary-color;
  font-size: 0.875em;
  margin-top: 0.5em;
}

.otp-inputs {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.otp-input {
  width: 50px;
  height: 50px;
  text-align: justify;
  background-color: $primary-color;
  color: $white-color;
  font-size: 2.5em;
  border-radius: 8px;
}
</style>

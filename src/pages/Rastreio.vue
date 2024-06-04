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

        <q-input
        color="primary"
        bg-color="info"
          filled
          label="Introduza o seu número de celular"
          v-model="phone"
          class="full-width"
          :prefix="phonePrefix"
          input-style="font-size: 20pt"
          mask="#########"
          hint="Formato: (258) ##-###-####"
        />
      </div>

      <div class="button-group">
        <q-btn
          @click="requestOtp"
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
          class="back-button"
        />
      </div>
    </div>

    <!-- OTP Dialog -->
    <q-dialog v-model="otpDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Insira o código OTP enviado para o seu celular</div>
          <div class="otp-inputs q-mt-md">
            <q-input
              v-for="(digit, index) in otp"
              :key="index"
              v-model="otp[index]"
              @input="onOtpInput(index)"
              maxlength="1"
              type="tel"
              class="otp-input"
              dense
              outlined
              mask="#"
              :ref="'otp' + index"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Verificar" color="primary" @click="verifyOtp" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Searching Dialog -->
    <q-dialog v-model="searchingDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Procurando a viatura com Matrícula: {{ matricula }}</div>
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
      otp: ['', '', '', ''],
      otpDialog: false,
      searchingDialog: false,
      progress: 0
    };
  },
  methods: {
    requestOtp() {
      this.otpDialog = true;
    },
    onOtpInput(index) {
      // Ensure the input only contains numbers
      this.otp[index] = this.otp[index].replace(/\D/g, '');
      // Move to the next input if current one is filled
      if (this.otp[index].length === 1 && index < this.otp.length - 1) {
        this.$refs['otp' + (index + 1)][0].focus();
      }
    },
    verifyOtp() {
      const otpCode = this.otp.join('');
      if (otpCode.length === 4) {
        this.otpDialog = false;
        this.searchingDialog = true;
        this.startProgress();
      } else {
        alert('OTP incompleto');
      }
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

.back-button {
  margin-top: 10px;
  border: 2px solid $positive; /* Red border */
  width: 100%;
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

.otp-inputs {
  display: flex;
  justify-content: space-around;
}

.otp-input {
  width: 50px;
  text-align: center;
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

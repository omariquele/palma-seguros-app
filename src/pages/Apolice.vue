<template>
  <q-page class="apolice-page text-center">
    <div class="content-wrapper q-pa-lg q-gutter-y-lg">
      <img src="palmalogo.png" alt="Logo" class="logo" />
      <div class="page-title text-bold">Apólice</div>

      <div class="button-group">
        <q-btn
          @click="viewApolice"
          unelevated
          label="Visualizar Apólice"
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
          class="full-width"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ApolicePage",
  methods: {
    viewApolice() {
      window.open("https://vitae-erp.com/61-666.pdf", "_blank");
    },
    goBack() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";
$primary-color: rgba(209, 36, 33, 1);
$grey-color: rgba(128, 128, 128, 1);
$white-color: rgba(255, 255, 255, 1);
.apolice-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("~@/assets/bg.png") no-repeat center center;
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
.full-width {
  width: 100%;
  margin-bottom: 10px;
}
</style>

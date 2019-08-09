<script>
export default {
  name: 'App-login',
  methods: {
    toLogin() {
      this.$router.push('/app');
    },
  },
};
</script>

<template>
  <div class="login">
    <div class="login-container">
      <div class="login-container--image">
        <img src="https://imgplaceholder.com/200x220/cccccc/757575/fa-image">
      </div>
      <div class="login-container--content">
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Senha">
        <button type="button" @click="toLogin">Entrar</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/_utilities/_variables';
@import '../assets/css/_utilities/_functions';
.login {
  align-items: center;
  background: $color-bg-shadow;
  display: flex;
  justify-content: center;
  height: 100vh;

  &-container {
    align-items: center;
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    padding: pxToRem(10);

    &--image {
      height: pxToRem(170);
      margin-bottom: pxToRem(40);

      img {
        border-radius: pxToRem(4);
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    &--content {
      align-self: stretch;
      display: flex;
      flex-direction: column;

      input {
        border-radius: pxToRem(4);
        font-size: pxToRem(12);
        font-weight: 900;
        padding: pxToRem(16) pxToRem(10);
        margin-bottom: pxToRem(8);
      }

      button {
        background: $color-primary;
        border: 0;
        border-radius: pxToRem(4);
        color: $color-secondary-text-light;
        font-size: pxToRem(14);
        font-weight: 900;
        margin-top: pxToRem(10);
        padding: pxToRem(10);

        &:hover {
          background: $color-primary-dark;
        }

        &:active {
          box-shadow: 0 0 pxToRem(2) pxToRem(2) $color-primary;
        }
      }
    }

    @media(max-width: 568px) {
      flex: 0 0 80%;
    }
  }
}
</style>

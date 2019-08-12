<script>
import login from '../services/LoginService';
import alert from '../utils/alert';

export default {
  name: 'App-login',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      inputTypes: ['email', 'password'],
      btnLoader: false,
    };
  },
  methods: {
    handleSubmit() {
      this.btnLoader = true;
      if (this.$refs.frmLogin.checkValidity()) {
        login(this.login)
          .then((results) => {
            const { data } = results.data;
            this.btnLoader = false;
            window.sessionStorage.setItem('tkn', data.token);
            this.$router.push('/app');
          }).catch((err) => {
            const { data } = err.response;
            this.btnLoader = false;
            alert.alertError(data.error.message, 'Login Inválido');
          });
      } else {
        this.btnLoader = false;
        Array.from(this.$refs.frmLogin.elements).forEach((input) => {
          if (this.inputTypes.indexOf(input.type) >= 0) {
            this.validateForm(input.name);
          }
        });
      }
    },
    validateForm(input) {
      if (!this.$refs[input].validity.valid) {
        this.$refs[input].nextElementSibling.classList.add('form-error--invalid');
      } else {
        this.$refs[input].nextElementSibling.classList.remove('form-error--invalid');
      }
    },
  },
};
</script>

<template>
  <div class="login">
    <div class="login-container">
      <div class="login-container--image">
        <img src="../assets/img/placeholders/login-placeholder.png">
      </div>
      <form
        autocomplete="off"
        class="login-container--form"
        novalidate
        ref="frmLogin"
        @submit.prevent="handleSubmit()">
          <input
            name="emailInput"
            placeholder="Email"
            ref="emailInput"
            required
            type="email"
            v-model="login.email"
            @blur="validateForm('emailInput')">
          <label class="form-error">E-mail inválido</label>
          <input
            name="pwdInput"
            placeholder="Senha"
            ref="pwdInput"
            required
            type="password"
            v-model="login.password"
            @blur="validateForm('pwdInput')">
          <label class="form-error">Senha inválida</label>
          <button class="btn" title="Login" type="submit">
            <div class="btn-text">Entrar</div>
            <div class="btn-loader" v-show="btnLoader">
              <div class="donut"></div>
            </div>
          </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/_utilities/_variables';
@import '../assets/css/_utilities/_functions';
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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
    max-width: pxToRem(400);

    &--image {
      height: pxToRem(170);
      margin-bottom: pxToRem(40);

      img {
        border-radius: pxToRem(22);
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    &--form {
      align-self: stretch;
      display: flex;
      flex-direction: column;

      input {
        border-radius: pxToRem(4);
        font-size: pxToRem(12);
        font-weight: 900;
        padding: pxToRem(16) pxToRem(10);
        margin-bottom: pxToRem(8);

        &::selection {
          background: $color-primary;
          color: $color-secondary-text-light;
        }

        &::-moz-selection {
          background: $color-primary;
          color: $color-secondary-text-light;
        }
      }
    }

    @media(max-width: 568px) {
      flex: 0 0 80%;
    }
  }

  .form-error {
    color: $color-danger;
    font-size: pxToRem(12);
    font-weight: 900;
    padding-bottom: pxToRem(8);
    visibility: hidden;

    &--invalid {
      visibility: visible;
    }
  }
}

.btn {
  align-items: center;
  background: $color-primary;
  border: 0;
  border-radius: pxToRem(4);
  color: $color-secondary-text-light;
  display: flex;
  font-size: pxToRem(16);
  font-weight: 900;
  margin-top: pxToRem(10);
  padding: pxToRem(10);

  &-text {
    flex: 0 0 60%;
    text-align: end;
  }

  &-loader {
    display: flex;
    flex: 0 0 40%;
    justify-content: flex-end;
  }

  &:hover {
    background: $color-primary-dark;
  }

  &:active {
    box-shadow: 0 0 pxToRem(2) pxToRem(2) $color-primary;
  }
}

.donut {
  display: inline-block;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #cacaca;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
</style>

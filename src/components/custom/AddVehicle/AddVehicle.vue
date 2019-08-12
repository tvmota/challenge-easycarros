<script>
// eslint-disable-next-line
import addIcon from '../../../assets/img/icons/plus.svg?sprite';
import vehicleService from '../../../services/VehicleService';
import swalAlert from '../../../utils/alert';

export default {
  name: 'App-add-vehicle',
  data() {
    return {
      addIcon,
      inputTypes: ['text'],
      vehicle: {
        plate: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.frmAddVehicle.checkValidity()) {
        vehicleService.add(this.vehicle).then((result) => {
          if (result.status === 200) {
            swalAlert.alertSuccess('Veículo adicionado com sucesso', 'Veículo');
            this.vehicle.plate = '';
            this.$store.dispatch('updateVehicles');
          }
        }).catch((err) => {
          swalAlert.alertError(err.response.data.error.message, 'Erro');
        });
      } else {
        Array.from(this.$refs.frmAddVehicle.elements).forEach((input) => {
          if (this.inputTypes.indexOf(input.type) >= 0) {
            this.validatePlate(input.name);
          }
        });
      }
    },
    validatePlate(input) {
      if (!this.$refs[input].validity.valid) {
        this.$refs.frmAddVehicle
          .querySelector('.form-error')
          .classList
          .add('form-error--invalid');
        this.$refs[input].classList.add('add-vehicle-frm--input--error');
      } else {
        this.$refs.frmAddVehicle
          .querySelector('.form-error')
          .classList
          .remove('form-error--invalid');
        this.$refs[input].classList.remove('add-vehicle-frm--input--error');
      }
    },
  },
};
</script>
<template>
  <div class="add-vehicle">
    <div class="add-vehicle-title">
      <h3>Adicionar Veículo</h3>
    </div>
    <form
      class="add-vehicle-frm"
      novalidate
      ref="frmAddVehicle"
      @submit.prevent="handleSubmit()">
        <div class="add-vehicle-frm--input">
          <input
            class="add-vehicle-frm--input--success"
            maxlength="7"
            name="plateInput"
            pattern="[a-zA-Z]{3}[0-9]{4}"
            placeholder="Placa"
            ref="plateInput"
            required
            type="text"
            v-model="vehicle.plate"
            @blur="validatePlate('plateInput')">
          <button title="Adicionar Carro" type="submit">
            <svg class="icone icone-md icone-light" role="presentation">
              <use :xlink:href="'#' + addIcon.id"></use>
            </svg>
          </button>
        </div>
        <div class="form-error">
          <label>Placa Inválida</label>
        </div>
    </form>
  </div>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_functions';
@import '../../../assets/css/_utilities/_variables';
@import '../../../assets/css/_modules/_icons';

.add-vehicle {
  align-self: stretch;
  border: 1px solid $color-primary;
  border-radius: pxToRem(6);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: pxToRem(26);
  padding: pxToRem(10) pxToRem(10);

  &-title {
    align-items: center;
    color: $color-primary;
    display: flex;
    font-size: pxToRem(16);
    font-weight: 700;
    margin-left: pxToRem(10);
    flex: 0 0 40%;

     @media(max-width: 568px) {
      margin-bottom: pxToRem(10);
      justify-content: center;
    }
  }

  &-frm {
    display: flex;
    flex-direction: column;

    &--input {
      display: flex;

      input {
        border-radius: pxToRem(4);
        flex: 0 0 80%;
        padding: pxToRem(10) pxToRem(10);
        width: 100%;
      }

      &--success {
        border: 1px solid $color-primary;
      }

      &--error {
        border: 1px solid $color-danger;
      }

      button {
        background: $color-primary;
        border: 0;
        border-radius: pxToRem(4);
        color: $color-secondary-text-light;
        font-size: pxToRem(16);
        font-weight: 900;
        margin-left: pxToRem(8);
        width: 100%;

        &:hover {
          background: $color-primary-dark;
        }

        &:active {
          box-shadow: 0 0 pxToRem(2) pxToRem(2) $color-primary;
        }
      }
    }

    @media(max-width: 568px) {
      justify-content: space-around;
      padding-bottom: pxToRem(10);
    }
  }

  @media(max-width: 568px) {
    flex-direction: column;
  }
}

.form-error {
  color: $color-danger;
  display: none;
  font-size: pxToRem(12);
  font-weight: 900;
  margin-top: pxToRem(6);

  &--invalid {
    display: block;
  }
}
</style>

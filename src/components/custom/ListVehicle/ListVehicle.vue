<script>
import { mapGetters } from 'vuex';
// eslint-disable-next-line
import closeIcon from '../../../assets/img/icons/cancel.svg?sprite';
import swalAlert from '../../../utils/alert';
import vehicleService from '../../../services/VehicleService';

export default {
  name: 'App-list-vehicle',
  data() {
    return {
      closeIcon,
    };
  },
  computed: {
    ...mapGetters(['getVehicles']),
  },
  methods: {
    confirmRemove(id) {
      swalAlert.alertConfirm('Deseja remover o veículo', 'Atenção').then((result) => {
        if (result.value) {
          this.$store.dispatch('updateStsLoader', true);
          this.removeVehicle(id);
        }
      });
    },
    removeVehicle(id) {
      vehicleService.remove(id).then((result) => {
        if (result.status === 204) {
          swalAlert.alertSuccess('Veículo removido com sucesso', 'Veículo');
          this.$store.dispatch('updateVehicles');
        }
      }).catch((err) => {
        swalAlert.alertError(err.response.data.error.message, 'Erro');
      }).finally(() => {
        this.$store.dispatch('updateStsLoader', false);
      });
    },
  },
};
</script>

<template>
  <ol class="list-container--content">
    <li class="list-container--item" v-for="vehicle in getVehicles" :key="vehicle.id">
      {{ vehicle.plate }}
      <button title="Remover Veículo" type="button" @click="confirmRemove(vehicle.id)">
        <svg class="icone icone-md icone-secondary" role="presentation">
          <use :xlink:href="'#' + closeIcon.id"></use>
        </svg>
      </button>
    </li>
  </ol>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_imports';
@import '../../../assets/css/_modules/_icons';

.list-container {
  display: flex;
  justify-content: center;
  width: 100%;

  &--content {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &--item {
    background-color: $color-primary-light;
    border-radius: pxToRem(8);
    color: $color-secondary;
    display: block;
    font-size: pxToRem(16);
    font-weight: 700;
    margin-bottom: pxToRem(10);
    padding: pxToRem(16);
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      margin-right: pxToRem(6);
      padding: pxToRem(8) pxToRem(12);
      position: absolute;
      right: 0;
      transform: translate(0%, -50%);
      top: 50%;

      svg {
        &:hover {
          fill: $color-danger;
        }
      }
    }

    &:hover {
      background: $color-primary;
      color: $color-white;
    }
  }
}

</style>

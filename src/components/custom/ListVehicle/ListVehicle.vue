<script>
import Paginate from 'vuejs-paginate';
// eslint-disable-next-line
import closeIcon from '../../../assets/img/icons/cancel.svg?sprite';
import swalAlert from '../../../utils/alert';
import vehicleService from '../../../services/VehicleService';
import arrays from '../../../utils/arrays';

export default {
  name: 'App-list-vehicle',
  components: {
    Paginate,
  },
  data() {
    return {
      closeIcon,
      pageItens: 5,
      pageNum: 1,
    };
  },
  computed: {
    getVehicles() {
      return arrays.chunk(this.$store.getters.getVehicles, this.pageItens);
    },
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
    handlePaginateClick(page) {
      this.pageNum = page;
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
  <div class="list-container">
    <div class="list-container-controls">
      <select class="qtde-items" v-model.number="pageItens">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="15">20</option>
      </select>
      <Paginate
          :activeClass="'pagination-active'"
          :clickHandler="handlePaginateClick"
          :containerClass="'pagination'"
          :disabledClass="'pagination-disabled'"
          :pageCount="getVehicles.length"
          :pageClass="'pagination-page'"
          :prevClass="'pagination-prev'"
          :prevText="'<'"
          :nextClass="'pagination-next'"
          :nextText="'>'"/>
    </div>
    <div class="list-container-content">
      <ol>
        <li
          class="list-container--item"
          v-for="vehicle in getVehicles[pageNum - 1]"
          :key="vehicle.id">
            {{ vehicle.plate }}
            <button title="Remover Veículo" type="button" @click="confirmRemove(vehicle.id)">
              <svg class="icone icone-md icone-secondary" role="presentation">
                <use :xlink:href="'#' + closeIcon.id"></use>
              </svg>
            </button>
        </li>
      </ol>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_imports';
@import '../../../assets/css/_modules/_icons';

.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;

  &-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: pxToRem(18);
  }

  &-content {
    ol {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
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
  }

  .pagination {
    align-content: flex-end;
    display: flex;
    flex-wrap: wrap;

    list-style: none;
    margin: 0;
    padding: 0;

    &-page,
    &-next,
    &-prev {
      border-radius: pxToRem(6);
      cursor: pointer;
      font-weight: 600;
      padding: pxToRem(6) pxToRem(12);

      &:hover {
        background-color: $color-primary;
        color: $color-white;
      }
    }

    &-active {
      background-color: $color-white;
      color: $color-primary;
    }

    &-disabled {
      cursor: not-allowed;

    }
  }

  .qtde-items {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: url('../../../assets/img/icons/arrow-up-and-down.svg'),
      linear-gradient(to bottom, $color-white 0%,$color-white 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    border: 1px solid $color-primary;
    border-radius: pxToRem(6);
    box-shadow: none;
    color: $color-primary-dark;
    font-size: pxToRem(18);
    font-weight: 600;
    margin-right: pxToRem(30);
    padding: pxToRem(4) pxToRem(8);
    outline: none;
    width: 62px;

    option {
      color: $color-primary-dark;
    }
  }
}
</style>

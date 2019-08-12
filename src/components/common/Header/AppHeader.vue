<script>
// eslint-disable-next-line
import carIcon from '../../../assets/img/icons/car.svg?sprite';
// eslint-disable-next-line
import logoutIcon from '../../../assets/img/icons/logout.svg?sprite';

export default {
  name: 'App-Header',
  data() {
    return {
      carIcon,
      logoutIcon,
    };
  },
  methods: {
    cleanLocalInfo() {
      window.sessionStorage.clear();
    },
  },
};
</script>
<template>
  <header aria-level="1" class="header" role="heading">
    <router-link class="c-hand" to="/app" title="Home">
      <svg class="icone icone-xl icone-light" role="presentation">
        <use :xlink:href="'#' + carIcon.id"></use>
      </svg>
    </router-link>
    <router-link @click.native="cleanLocalInfo()" class="c-hand" title="Sair" to="/">
      <svg class="icone icone-lg icone-light logout" role="presentation">
        <use :xlink:href="'#' + logoutIcon.id"></use>
      </svg>
    </router-link>
  </header>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables';
@import '../../../assets/css/_utilities/_functions';
@import '../../../assets/css/_modules/_cursors';
@import '../../../assets/css/_modules/_icons';

.header {
  background-color: $color-primary;
  border-bottom: pxToRem(1) solid $color-primary-dark;
  color: $color-primary-text-light;
  flex: none;
  display: flex;
  padding: pxToRem(20);
  justify-content: space-between;
  align-items: center;
}

.logout {
  &:hover {
    fill: $color-primary-light;
  }
}
</style>

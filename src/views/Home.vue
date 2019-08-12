<script>
import AppHeader from '@/components/common/Header/AppHeader.vue';
import AppFooter from '@/components/common/Footer/AppFooter.vue';
import Loader from '@/components/common/Loader/Loader.vue';
import AddVehicle from '@/components/custom/AddVehicle/AddVehicle.vue';
import vehicleService from '../services/VehicleService';

export default {
  name: 'App-home',
  components: {
    AppHeader,
    AppFooter,
    AddVehicle,
    Loader,
  },
  created() {
    vehicleService.list()
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
  },
};
</script>

<template>
  <div class="home">
    <AppHeader />
    <main class="home-content" role="main">
      <AddVehicle />
      <div>asdsadasdasdas</div>
    </main>
    <AppFooter />
    <Loader />
  </div>
</template>

<style lang="scss">
@import '../assets/css/_utilities/_imports';

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-content {
    @include flexContainer(flex, column, nowrap, flex-start, flex-start, flex-start);
    flex: 1 0 auto;
    padding: pxToRem(20) pxToRem(30) pxToRem(20) pxToRem(30);
    overflow-y: auto;
    width: 100%;
  }
}
</style>

<script>
export default {
  name: 'App-Header',
};
</script>
<template>
  <header aria-level="1" class="header" role="heading">
    <!--router-link class="home-link" to="/">
      Home
    </router-link-->
    <h2>Home</h2>
  </header>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables.scss';
@import '../../../assets/css/_utilities/_functions.scss';

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
</style>

<script>
export default {
  name: 'App-Footer',
};
</script>
<template>
  <footer class="container-footer" role="contentinfo">
    <a
      class="container-footer--link"
      href="https://github.com/tvmota/challenge-easycarros"
      target="_blank"
      title="Codigo fonte">
        GitHub
    </a>
  </footer>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables.scss';
@import '../../../assets/css/_utilities/_functions.scss';

.container-footer {
  background-color: $color-primary-light;
  color: $color-secondary-text-dark;
  flex: none;
  padding: pxToRem(10);
  text-align: right;

  &--link {
    color: $color-secondary-text-dark;
    font-size: pxToRem(20);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

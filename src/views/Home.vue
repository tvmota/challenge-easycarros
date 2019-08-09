<script>
import AppHeader from '@/components/common/Header/AppHeader.vue';
import AppFooter from '@/components/common/Footer/AppFooter.vue';

export default {
  name: 'App-home',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="home">
    <AppHeader />
    <main class="home-content" role="main">
      lista
    </main>
    <AppFooter />
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

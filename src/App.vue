<script>
export default {
  name: 'App-main',
};
</script>

<template>
  <div class="app" id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/_base/_normalize';
@import './assets/css/_base/_base';
@import '~sweetalert2/src/sweetalert2';
.app {
  display: flex;
  flex-direction: column;
}
</style>

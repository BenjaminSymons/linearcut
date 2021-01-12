<template>
  <div id="app">
    <app-header />
    <section class="tool"></section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  data() {
    return {
      maxLength: 0,
      pieces: [],
      kerfing: 0
    };
  },
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
body {
  width: 100vw;
  min-height: 100vh;
  background: $b1; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    $b1 0%,
    $b2 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    $b1 0%,
    $b2 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    $b1 0%,
    $b2 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$b1', endColorstr='$b2',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  font-weight: 300;
}

#app {
  margin: 5vmin;
}

.tool {
  border: 1px solid $deepSkyBlue;
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
  background: $t1; /* Old browsers */
  background: -moz-linear-gradient(top, $t1 0%, $t2 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    $t1 0%,
    $t2 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    $t1 0%,
    $t2 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#16242c', endColorstr='#12101d',GradientType=0 ); /* IE6-9 fallback on horizontal gradient */
  box-shadow: 0 2px 20px 0 #aaa;
}
</style>

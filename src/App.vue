<template>
  <div id="app">
    <section class="tool"></section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  width: 100vw;
  min-height: 100vh;
}

#app {
  margin: 5vmin;
}

.tool {
  border: 1px solid #08c5ff;
  width: calc(70vw - 50px);
  height: calc(90vh - 50px);
  background: #192d38; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #16242c 0%,
    #12101d 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #16242c 0%,
    #12101d 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #16242c 0%,
    #12101d 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#16242c', endColorstr='#12101d',GradientType=0 ); /* IE6-9 fallback on horizontal gradient */
  box-shadow: 0 2px 20px 0 #000;
}
</style>

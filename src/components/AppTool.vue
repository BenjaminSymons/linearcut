<template>
  <main>
    <section class="tool"></section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
}

.tool {
  border: 1px solid $deepSkyBlue;
  width: 100%;
  height: 100%;
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
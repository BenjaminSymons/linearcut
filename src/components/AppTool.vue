<template>
  <main>
    <section class="tool">
      <div class="material" v-for="item in items" :key="item.id">
        <div class="material-container">
          <div class="piece" :style="{height: (item[1]/getMaxLength * 100 + '%')}">
            {{ item[1] }}
          </div>
        </div>
        <p>{{ getMaxLength }}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    getMaxLength() {
      return this.$store.state.maxLength;
    },
  },
};
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
  display: flex;
}

.material {
  display: flex;
  flex-direction: column;

  & p {
    margin: 0;
    padding: 0%;
    align-self: center;
  }
}

.material-container {
  display: flex;
  flex-grow: 1;
  border: solid 1px black;
  margin: 5px;
}

.piece {
  display: flex;
  background-color: rgba($color: #000000, $alpha: 0.1);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.5);
  width: 30px;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
}
</style>
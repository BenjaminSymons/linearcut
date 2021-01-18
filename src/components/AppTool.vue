<template>
  <main>
    <section class="tool">
      <div class="material" v-for="item in stock_array" :key="item.id">
        <div class="material-container">
          <div v-for="piece in item" :key="piece.id" class="piece" :style="{ height: (piece / maxLength) * 100 + '%' }">
            {{ piece }}
          </div>
        </div>
        <p>{{ maxLength }}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cut_list: [],
      cut_array: [],
      stock_array: [],
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    maxLength() {
      return this.$store.state.maxLength;
    },
    gap() {
      return this.$store.state.gappage;
    },
  },
  watch: {
    items(newVal, oldVal) {
      this.cut_list = newVal;
      this.resetArrays();
      this.organise();
    },
    maxLength(newVal, oldVal) {
      this.resetArrays();
      this.organise();
    },
    gap(newVal, oldVal) {
      this.resetArrays();
      this.organise();
    },
  },
  methods: {
    init() {
      this.cut_list = this.$store.state.piecesRequired;
    },
    resetArrays() {
      this.cut_array = [];
      this.stock_array = [];
    },
    arraySum(arr, gap) {
      var sum = 0;
      for (var i = 0, len = arr.length; i < len; sum += arr[i++]);
      sum += arr.length * gap;
      return sum;
    },
    maxSize() {
      var arr = this.cut_list;
      var high = 0;
      for (let i = 0; i < arr.length; i++) {
        high = high < arr[i] ? arr[i] : high;
      }
      return high;
    },
    parseData() {
      for (let i = 0; i < this.cut_list.length; i++) {
        if (this.cut_list[i][1] <= (this.maxSize() > this.maxLength ? this.maxSize() : this.maxLength)) {
          for (let j = 0; j < this.cut_list[i][0]; j++) {
            this.cut_array.push(this.cut_list[i][1]);
          }
        }
      }
    },
    sortDesc(arr) {
      return arr.sort(function (a, b) {
        return b - a;
      });
    },
    sortStock() {
      this.stock_array.sort(function (a, b) {
        var a_remaining = a - this.arraySum(a, this.gap);
        var b_remaining = b - this.arraySum(b, this.gap);
        return a_remaining - b_remaining;
      });
    },
    organise() {
      this.parseData();
      this.sortDesc(this.cut_array);
      this.sortStock();
      if (this.cut_array.length === 0) return;

      for (var i = 0; i < this.cut_array.length; i++) {
        var index = 0;
        if (this.stock_array.length === 0) this.stock_array.push([]);
        if (this.cut_array[i] > this.maxLength && this.cut_array[i] > this.maxSize()) {
          alert("Fatal Error");
          return;
        }
        while (this.maxLength - this.arraySum(this.stock_array[index], this.gap) < this.cut_array[i]) {
          index++;
          if (index >= this.stock_array.length) this.stock_array.push([]);
        }
        this.stock_array[index].push(this.cut_array[i]);
      }
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
  background: -webkit-linear-gradient(top, $t1 0%, $t2 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, $t1 0%, $t2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
  flex-direction: column;
}

.material-container:nth-child(1) {
  border-top: 1px solid rgba($color: #000000, $alpha: 0.5);
}

.piece {
  display: flex;
  background-color: $pieces;
  // border-top: 1px solid rgba($color: #000000, $alpha: 0.5);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.5);
  width: 30px;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
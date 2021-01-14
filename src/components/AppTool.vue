<template>
  <main>
    <section class="tool">
      <div class="material" v-for="item in parsed_list" :key="item.id">
        <div class="material-container">
          <div
            class="piece"
            :style="{ height: (item / getMaxLength) * 100 + '%' }"
          >
            {{ item }}
          </div>
        </div>
        <p>{{ getMaxLength }}</p>
      </div>
    </section>
    {{ this.parsed_list }}
    {{ stock_array }}
  </main>
</template>

<script>
export default {
  data() {
    return {
      parsed_list: [],
      stock_array: [],
    };
  },
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
  watch: {
    items(newVal, oldVal) {
      this.parseData();
      this.sortDesc(this.stock_array);
      this.organise();
    },
  },
  methods: {
    arraySum(arr, gap) {
      let sum = 0;
      for (let i = 0, length = arr.length; i < length; sum += arr[i++]) {
        sum += arr.length * gap;
        return sum;
      }
    },
    maxSize() {
      var arr = this.parsed_list;
      console.log(arr);
      var high = 0;
      for (let i = 0; i < arr.length; i++) {
        high = high < arr[i] ? arr[i] : high;
      }
      console.log(high);
      return high;
    },
    parseData() {
      for (let i = 0; i < this.$store.state.piecesRequired.length; i++) {
        if (
          this.$store.state.piecesRequired[i][1] <=
          (this.maxSize() > this.$store.state.maxLength
            ? this.maxSize()
            : this.$store.state.maxLength)
        ) {
          for (let j = 0; j < this.$store.state.piecesRequired[i][0]; j++) {
            this.parsed_list.push(this.$store.state.piecesRequired[i][1]);
          }
        }
      }
    },
    sortDesc(arr) {
      return arr.sort(function (a, b) {
        return b - a;
      });
    },
    sortData() {
      plank_array.sort(function (a, b) {
        var a_remaining = a - arraySum(a, 0);
        var b_remaining = b - arraySum(b, 0);
        return a_remaining - b_remaining;
      });
    },
    organise() {
      this.stock_array = [];
      if (this.parsed_list.length === 0) return;

      for (let i = 0; i < this.parsed_list.length; i++) {
        var index = 0;
        if (this.stock_array.length === 0) this.stock_array.push([]);
        if (
          this.parsed_list[i] > this.$store.state.maxLength &&
          this.parsed_list[i] > this.maxSize()
        ) {
          alert("Fatal Error");
          return;
        }
        while (
          this.$store.state.maxLength -
            this.arraySum(this.stock_array[index], 0) <
          this.parsed_list[i]
        ) {
          index++;
          if (index >= this.stock_array.length) this.stock_array.push([]);
        }
        this.stock_array[index].push(this.parsed_list[i]);
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
<template>
  <aside>
    <p>{{ inputLength }}</p>
    <p>{{ inputQuantity }}</p>
    <fieldset>
      <label for="inputLength">Length</label>
      <input
        id="inputLength"
        type="number"
        min=0
        @input="$emit('update:inputLength', $event.target.value)"
        oninput="validity.valid||(value='')"
        v-model.number="inputLength"
      />
    </fieldset>

    <fieldset>
      <label for="inputQuantity">Quantity</label>
      <input
        id="inputQuantity"
        type="number"
        min=1
        @input="$emit('update:inputQuantity', $event.target.value)"
        v-model.number="inputQuantity"
      />
    </fieldset>

    <button @click="addInputToList()">Add to list</button>

    <!-- <fieldset>
      <select>
        <option v-for="item in piecesRequired" key="item.id" :value="item">
          {{ item[1] }}
        </option>
      </select>
    </fieldset> -->

    <fieldset>
      <legend>Settings</legend>
    </fieldset>
  </aside>
</template>

<script>
export default {
  props: {
    inputLength: {
      type: [Number],
      required: true,
    },
    inputQuantity: {
      type: [Number],
      required: true,
    },
    gappage: {
      type: [Number],
      required: true,
    },
    piecesRequired: {
      type: [Array, Number],
      required: true,
    },
  },
  methods: {
      addInputToList() {
      if(!this.inputLength) {
        return;
      }

      this.piecesRequired.push([this.inputQuantity, this.inputLength]);
      this.inputLength = 0;
      this.inputQuantity = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  margin: 60px 60px;
  font-size: 17px;
  width: 300px;
}
</style>
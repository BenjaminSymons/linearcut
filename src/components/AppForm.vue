<template>
  <aside>
    <h3>Pieces Required</h3>
    <fieldset>
      <label for="inputLength">Length</label>
      <input
        id="inputLength"
        type="number"
        min="0"
        @input="$store.commit(`updateInputLength`, $event.target.value)"
        :value="inputLength"
      />
    </fieldset>
    <fieldset>
      <label for="inputQuantity">Quantity</label>
      <input
        id="inputQuantity"
        type="number"
        min="1"
        @input="$store.commit(`updateInputQuantity`, $event.target.value)"
        :value="inputQuantity"
      />
    </fieldset>

    <button @click="addInputToList()">Add to list</button>

    <fieldset>
      <select class="pieces-list" size="10">
        <option
          v-for="item in piecesRequired"
          :key="item.id"
          :value="item"
          @click="removeInputFromList(item)"
        >
          {{ item[0] }} x {{ item[1] }}
        </option>
      </select>
    </fieldset>

    <fieldset>
      <h3>Settings</h3>
      <label for="maxLength">Material Length</label>
      <input
        id="maxLength"
        type="number"
        min="0"
        @input="$store.commit(`updateMaxLength`, $event.target.value)"
        :value="maxLength"
      />
    </fieldset>

    <fieldset>
      <label for="gappage">Gap Required</label>
      <input
        id="gappage"
        type="number"
        min="0"
        @input="$store.commit(`updateGappage`, $event.target.value)"
        :value="gappage"
      />
    </fieldset>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "inputLength",
      "inputQuantity",
      "maxLength",
      "gappage",
      "piecesRequired",
    ]),
  },
  watch: {
    piecesRequired(newVal, oldVal) {
      const payload = {
        newVal,
        oldVal,
      };
      this.$store.commit("adjustArr", newVal);
    },
  },
  methods: {
    addInputToList() {
      if (!this.inputLength) {
        return;
      }
      this.piecesRequired.push([this.inputQuantity, this.inputLength]);
      this.$store.commit(`updateInputLength`, 0);
      this.$store.commit(`updateInputQuantity`, 0);
    },

    removeInputFromList(itemToDelete) {
      var index = this.piecesRequired.indexOf(itemToDelete);
      if (index >= 0) {
        this.piecesRequired.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
}

aside {
  margin: 30px 60px;
  font-size: 17px;
  width: 300px;
}

.pieces-list {
  width: 230px;
  padding: 5px;
  font: inherit;
  color: inherit;
  border: 1px solid $subtitleText;
}
</style>
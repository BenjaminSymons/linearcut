<template>
  <div id="app">
    <app-header />
    <section class="container">
      <app-tool :items="piecesRequired" />
      <app-form />
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppTool from "./components/AppTool";
import AppForm from "./components/AppForm";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppTool,
    AppForm,
  },
  computed: {
    ...mapState(["maxLength", "piecesRequired", "gappage", "outputList"]),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
body {
  width: 100%;
  min-height: 90vh;
  padding: 0;
  margin: 0;
  background: $b1; /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, $b1 0%, $b2 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, $b1 0%, $b2 100%); /* Chrome10-25,Safari5.1-6 */
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
  margin: 5vmin 5vmin 0;
}

.container {
  display: flex;
}

label {
  padding-right: 18px;
  display: inline-block;
  width: 150px;
}

input {
  font-size: 17px;
  background: $b2;
  color: black;
  width: 80px;
  padding: 5px;
  border: 1px solid #666;
}

fieldset {
  margin-bottom: 20px;
  border: none;
  margin: 0;
  padding: 5px 0;
}

button {
  background: transparent;
  color: $subtitleText;
  padding: 4px 30px 5px;
  border-radius: 1000px;
  border: 1px solid $subtitleText;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
  transition: 0.25s all;
  &:hover {
    background: $subtitleText;
    color: white;
  }
}
</style>

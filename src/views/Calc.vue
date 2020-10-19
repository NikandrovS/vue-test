<template>
  <input type="text" disabled v-model="currentValue" placeholder="0">
  <table>
    <tr>
      <td v-on:click="actionButton" v-bind:class="{active: activeAction === '+'}">&plus;</td>
      <td v-on:click="actionButton" v-bind:class="{active: activeAction === '-'}">&minus;</td>
      <td v-on:click="actionButton" v-bind:class="{active: activeAction === '*'}">&times;</td>
      <td v-on:click="actionButton" v-bind:class="{active: activeAction === '/'}">&divide;</td>
    </tr>
    <tr>
      <td v-on:click="clickNumber">&#55;</td>
      <td v-on:click="clickNumber">&#56;</td>
      <td v-on:click="clickNumber">&#57;</td>
      <td v-on:click="clearInput" rowspan="2">&#8705;</td>
    </tr>
    <tr>
      <td v-on:click="clickNumber">&#52;</td>
      <td v-on:click="clickNumber">&#53;</td>
      <td v-on:click="clickNumber">&#54;</td>
    </tr>
    <tr>
      <td v-on:click="clickNumber">&#49;</td>
      <td v-on:click="clickNumber">&#50;</td>
      <td v-on:click="clickNumber">&#51;</td>
      <td v-on:click="result" rowspan="2">&equals;</td>
    </tr>
    <tr>
      <td v-on:click="clickNumber" colspan="2">&#48;</td>
      <td v-on:click="clickNumber">&period;</td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
export default {
  name: "Calc",
  computed: mapGetters(["currentValue", "activeAction"]),
  methods: {
    ...mapMutations([
        "inputEntry", "clearInput", "action", "result"
    ]),
    clickNumber(e) {
      this.inputEntry(e.target.innerHTML)
    },
    actionButton(e) {
      this.action(e.target.innerHTML)
    },
  },
  filters: {
    uppercase(value) {
      console.log(value)
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    width: 186px;
    border: none;
    outline: none;
    padding: 5px 0;
    text-align: right;
    font-size: 20px;
  }
  table {
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
  }
  td {
    cursor: pointer;
    font-size: 30px;
    width: 45px;
    height: 30px;
    background: #4a4a4a;
    color: white;
  }
  .active {
    opacity: 0.4;
  }
  td:hover {
    opacity: 0.8;
  }
  td:active {
    opacity: 0.7;
  }
  tr:nth-child(2n) td:last-child{
    background: #949494;
  }
  tr:last-of-type td:first-child{
    text-align: left;
    padding-left: 15px;
  }
  tr:first-of-type td{
    background: #eea802;
  }
</style>

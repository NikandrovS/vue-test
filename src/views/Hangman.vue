<template>
  <table>
    <thead>
      <tr>
        <td></td>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td v-if="error">{{ error }}</td>
      <td v-else-if="hiddenWord.length">{{ wordType }}</td>
      <td v-else></td>
    </tr>
    <tr>
      <td v-if="message">{{ message }}</td>
      <td v-else-if="!gameState"><button v-on:click="play">Begin</button></td>
      <td v-else>{{ getStripes }}</td>
    </tr>
    <tr>
      <td>
        <form v-on:submit.prevent="onSubmit" v-if="gameState">
          <input type="text" maxlength="1" autofocus v-model="input">
          <button type="submit">&#10004;</button>
        </form>
      </td>
    </tr>
    <tr>
      <td><span :class="{active: attempts < 7}">&#128255;</span></td>
    </tr>
    <tr>
      <td><span :class="{active: attempts < 3}" ref="face"></span></td>
    </tr>
    <tr>
      <td>
        <span :class="{active: attempts < 2}">&#9995;</span>
        <span :class="{active: attempts < 4}">&#128085;</span>
        <span :class="{active: attempts < 2}">&#129306;</span>
      </td>
    </tr>
    <tr>
      <td><span :class="{active: attempts < 5}">&#128086;</span></td>
    </tr>
    <tr>
      <td><span :class="{active: attempts < 6}">&#128095;&#128095;</span></td>
    </tr>
    <tr>
      <td><span :class="{active: attempts < 8 && attempts > 0}">&#128230;&#128230;&#128230;</span></td>
    </tr>
    <tr>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex"
export default {
  name: "Hangman",
  data: () => ({
    input: ''
  }),
  computed: mapGetters([
      "message", "error", "attempts", "wordType", "gameState", "getStripes",
      "usedLetters", "currentFace", "lettersRemain", "hiddenWord"
  ]),
  methods: {
    ...mapMutations(["updateError", "setEmoji"]),
    ...mapActions(["play", "inputCheck", "gameOver"]),
    onSubmit() {
      this.updateError()

      let reg = /[А-Яа-я]/;
      if (reg.test(this.input)) {
        if(!!!(this.usedLetters.filter(l => l === this.input.toLowerCase())).length) {
          this.inputCheck(this.input)
        } else {
          this.updateError("Уже использовали... ")
        }

        if (!this.lettersRemain) {
          this.setEmoji('win')
          this.gameOver('win')
        }
        if (!this.attempts) {
          this.setEmoji()
          this.gameOver('lose')
        }
      } else {
        this.updateError("Ошибка введите букву")
      }

      this.$refs.face.innerHTML = this.currentFace

      this.input = ''
    }
  }
}
</script>

<style scoped>
  table {
    border-spacing: 0;
    margin: 0 auto;
  }
  form {
    display: flex;
    justify-content: center;
  }
  input {
    width: 18px;
    margin-right: 15px;
    padding-left: 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #fff8db;
    padding: 5px 10px;
    border-radius: 3px;
  }
  td {
    width: 200px;
    height: 24px;
    background: #dbe2ff;
  }
  span {
    display: none;
    margin: 0;
  }
  .active {
    display: inline-block;
  }
</style>

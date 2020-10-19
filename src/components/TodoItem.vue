<template>
  <li v-if="!todo.completed">
    <input type="checkbox" v-on:change="todo.completed = !todo.completed">
    <span>
      {{ todo.title }}
    </span>
    <button class="remove" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      require: true
    }
  }
}
</script>

<style>
  li {
    display: flex;
    align-items: center;
    padding: 7px 9px 7px 7px;
    margin-bottom: 1em;
    border: 1px solid #d4d4d4;
    text-align: left;
  }
  input[type="checkbox"] {
    margin-right: 1em;
  }
  span {
    margin-right: 1em;
  }
  span:first-letter {
    text-transform: uppercase;
  }
  .remove {
    margin-left: auto;
    height: fit-content;
  }
  button {
    cursor: pointer;
    outline: none;
    background: white;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
  }
  button:active {
    position: relative;
    top: 1px;
  }
</style>

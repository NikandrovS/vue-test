<template>
  <li v-if="todo.completed">
    <input type="checkbox" v-on:change="todo.completed = !todo.completed">
    <span v-bind:class="{done: todo.completed}">
      {{ todo.title }}
    </span>
    <button class="remove" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  name: "DoneItem",
  props: {
    todo: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>

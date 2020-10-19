<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      v-bind:todo="todo"
      v-on:remove-todo="removeTodo"
    />
    <DoneItem
      v-for="todo in todos"
      v-bind:todo="todo"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import DoneItem from "@/components/DoneItem";
export default {
  name: "TodoList",
  props: ['todos'],
  components: {
    TodoItem,
    DoneItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

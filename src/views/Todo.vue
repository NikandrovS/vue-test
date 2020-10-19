<template>
  <main>
    <AddTodo
        v-on:add-todo="addTodo"
    />
    <TodoList
        v-if="getTodos.length"
        v-bind:todos="getTodos"
        v-on:remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </main>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { mapGetters, mapMutations } from "vuex"
export default {
  name: "Todo",
  methods: {
    ...mapMutations(["add", "remove"]),
    addTodo(todo) {
      this.add(todo)
    },
    removeTodo(id) {
      this.remove(id)
    }
  },
  computed: mapGetters(["getTodos"]),
  components: {
    AddTodo, TodoList
  }
}
</script>

<style scoped>
  main {
    max-width: 400px;
    margin: 0 auto;
  }
</style>

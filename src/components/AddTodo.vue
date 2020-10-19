<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">+</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.title = ''
        this.$emit('add-todo', newTodo)
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
    padding: 0 1em;
    margin-bottom: 1em;
  }
  input {
    margin-right: 1em;
    padding: 7px 9px;
    border: 1px solid #d4d4d4;
  }
  button {
    padding: 7px 11px;
  }
</style>

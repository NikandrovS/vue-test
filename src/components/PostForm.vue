<template>
  <form v-on:submit.prevent="submit">
    <input type="text" placeholder="Title" v-model="title">
    <input type="text" placeholder="Body" v-model="body">
    <button type="submit">Create Post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "PostForm",
  data() {
    return {
      title: "",
      body: ""
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  input {
    width: 40%;
    padding: 10px 10px;
    margin-bottom: 10px;
    border: 1px solid #cfcfcf;
  }
  button {
    cursor: pointer;
    padding: 5px 20px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    background: white;
  }
  button:active {
    position: relative;
    top: 1px;
  }
</style>

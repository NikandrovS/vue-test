<template>
  <h2>Available posts: {{ postsCount }}</h2>
  <PostForm />
  <Loader v-if="loadingStatus"/>
  <div class="post" v-for="post in validPosts">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from "@/components/PostForm";
import Loader from "@/components/Loader";
export default {
  name: "Posts",
  computed: mapGetters(["validPosts", "postsCount", "loadingStatus"]),
  methods: mapActions(["fetchPosts"]),
  components: {
    PostForm,
    Loader
  },
  async mounted() {
    this.fetchPosts()
  }
}
</script>

<style>
  .post {
    border: 1px solid #42b983;
    border-radius: 15px;
    margin: 0 auto 10px;
    width: 40%;
    padding: 5px 15px;
  }
</style>

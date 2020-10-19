export default {
    state: {
        posts: [],
        loading: true
    },
    mutations: {
        updatePosts(state, posts) {
            state.loading = false
            state.posts = posts
        },
        createPost(state, post) {
            state.posts.unshift(post)
        },
    },
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
            )
            const posts = await res.json()
            setTimeout(() => {
                ctx.commit('updatePosts', posts)
            }, 1000)
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        validPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        loadingStatus(state) {
            return state.loading
        },
        postsCount(state, getters) {
            return getters.validPosts.length
        },
    }
}

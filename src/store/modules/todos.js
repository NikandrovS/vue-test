export default {
    state: {
        todos: [
            {
                id: 1,
                title: 'Купить молоко',
                completed: false,
            },
            {
                id: 2,
                title: 'Купить хлеб',
                completed: false,
            },
            {
                id: 3,
                title: 'Купить бананы',
                completed: true,
            },
            {
                id: 4,
                title: 'Купить молоко',
                completed: false,
            }
        ]
    },
    mutations: {
        add(state, todo) {
            state.todos.unshift(todo)
        },
        remove(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        }
    },
    actions: {
    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    }
}

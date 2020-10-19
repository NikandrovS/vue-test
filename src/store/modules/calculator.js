export default {
    state: {
        input: '',
        memory: '',
        active: ''
    },
    mutations: {
        inputEntry(state, value = '') {
            if (!parseInt(state.input) && value === '0') {
                return false
            } else {
                if (state.active) {
                    state.memory += state.active
                    state.active = ''
                    state.input = ''
                }
                state.input += value
                state.memory += value
            }
        },
        clearInput(state) {
            state.input = ''
            state.memory = ''
            state.active = ''
        },
        action(state, char) {
            if (state.input) {
                switch (char) {
                    case '+':
                        state.active = '+'
                        break
                    case '−':
                        state.active = '-'
                        break
                    case '×':
                        state.active = '*'
                        break
                    case '÷':
                        state.active = '/'
                        break
                    default: break
                }
            }
        },
        result(state) {
            if (state.memory) {
                let result = eval(state.memory)
                if (!Number.isInteger(result)) {
                    result = result.toFixed(2)
                }
                state.memory = result
                state.input = result.toString()
            }
        }
    },
    actions: {
    },
    getters: {
        currentValue(state) {
            return state.input
        },
        activeAction(state) {
            return state.active
        },
    }
}

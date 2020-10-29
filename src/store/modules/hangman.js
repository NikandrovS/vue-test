export default {
    state: {
        words: [
            {type: 'Домашнее животное', array: ['кот', 'лама', 'собака']},
            {type: 'Овощь', array: ['помидор', 'огурец', 'морковь']},
            {type: 'Фрукт', array: ['ананас', 'яблоко', 'банан']},
        ],
        faces: [
            ['&#129402;', '&#128563;', '&#128559;'], // default faces
            ['&#128552;', '&#128561;', '&#128542;'], // sad faces
            ['&#128557;', '&#128534;', '&#128555;'],  // dead faces
            ['&#129312;', '&#128524;', '&#128521;', '&#128536;', '&#129299;'], // funny faces
            ['&#128526;', '&#129395;'], // cool faces
        ],
        message: '',
        error: '',
        currentFace: '',
        gameState: false,
        attempts: 8,
        hiddenWord: [],
        usedLetters: [],
    },
    mutations: {
        getWord(state) {
            state.activeType = state.words[Math.floor(Math.random() * state.words.length)]
            state.activeWord = state.activeType.array[Math.floor(Math.random() * state.activeType.array.length)]
            state.lettersRemain = state.activeWord.length
        },

        updateMessage(state, message = '') {
            state.message = message
        },
        updateError(state, error = '') {
            state.error = error
        },

        setGameState(state, status) {
            state.gameState = status
        },
        pushUnderline(state) {
            state.hiddenWord.push('_')
        },
        updateHiddenWord(state, { idx, letter }) {
            state.hiddenWord[idx] = letter
            state.lettersRemain--
        },
        removeAttempt(state) {
            state.attempts--
        },
        usedLetter(state, input) {
            state.usedLetters.push(input)
        },
        resetGame(state) {
            state.gameState = false
            state.error = ""
            state.hiddenWord = []
            state.usedLetters = []
        },
        clearField(state) {
            state.message = ''
            state.attempts = 8
        },

        setEmoji(state, reason = '') {
            if (reason === 'win') {
                state.currentFace = state.faces[4][Math.floor(Math.random() * state.faces[4].length)];
            } else if (reason === 'right') {
                state.currentFace = state.faces[3][Math.floor(Math.random() * state.faces[3].length)];
            }  else {
                switch (this.attempts) {
                    case 0:
                        state.currentFace = state.faces[2][Math.floor(Math.random() * state.faces[2].length)];
                        break
                    case 1:
                        state.currentFace = state.faces[1][Math.floor(Math.random() * state.faces[1].length)];
                        break
                    default:
                        state.currentFace = state.faces[0][Math.floor(Math.random() * state.faces[0].length)];
                        break
                }
            }
        }
    },
    actions: {
        play({ commit, state }) {
            commit('updateMessage', 'удачи...')
            setTimeout(() => {
                commit('setGameState', true)
                commit('getWord')
                for (let i = 0; i < state.activeWord.length; i++) {
                    commit('pushUnderline')
                }
                commit('updateMessage')
            }, 1000)
        },
        inputCheck({ state, commit }, userInput) {
            let input = userInput.toLowerCase()
            let letterFound = state.activeWord.length

            for (let j = 0; j < state.activeWord.length; j++) {
                if (state.activeWord[j] === input && state.hiddenWord[j] === '_') {
                    commit('updateHiddenWord', { idx: j, letter: input })
                } else {
                    letterFound--
                }
            }
            if (letterFound === 0 && state.attempts) {
                commit('removeAttempt')
                if (state.attempts) {
                    commit('updateError', "Попробуй другую")
                    commit('setEmoji')
                }
            } else {
                commit('setEmoji', "right")
            }
            commit('usedLetter', input)
        },
        gameOver({ commit }, status) {
            if (status === 'win') {
                commit('updateMessage', 'Победа!')
            } else {
                commit('updateMessage', 'Не повезло...')
            }
            commit('resetGame')
            setTimeout(() => {
                commit('clearField')
            }, 2000)
        }
    },
    getters: {
        gameState(state) {
            return state.gameState
        },
        currentFace(state) {
            return state.currentFace
        },
        message(state) {
            return state.message
        },
        error(state) {
            return state.error
        },
        attempts(state) {
            return state.attempts
        },
        lettersRemain(state) {
            return state.lettersRemain
        },
        wordType(state) {
            return state.activeType.type
        },
        getStripes(state) {
            return state.hiddenWord.join(' ')
        },
        usedLetters(state) {
            return state.usedLetters
        },
        hiddenWord(state) {
            return state.hiddenWord
        }
    }
}

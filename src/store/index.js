import { createStore } from 'vuex'
import todos from "@/store/modules/todos";
import post from "@/store/modules/post";
import calculator from "@/store/modules/calculator";
import hangman from "./modules/hangman";

export default createStore({
  modules: {
    todos,
    post,
    calculator,
    hangman
  }
})

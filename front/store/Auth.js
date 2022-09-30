export const state = {
    loggedIn: false
}

export const getters = {
    estaLogado(state){
        return state.loggedIn;
    }
}

export const actions = {
    changeLogin({ commit }, logged_in){
        commit('LOGADO', logged_in)
    }
}

export const mutations = {
    LOGADO(state, logged_in){
        state.loggedIn = logged_in
    }
}
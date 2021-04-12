export default {
    getToken(state){
        state.token = localStorage.getItem('token')
    },
    setToken(state, newToken){
        state.token = newToken
        localStorage.setItem('token',newToken)
    },
    setUser(state,obj){
        state.userObj = obj
    }
}
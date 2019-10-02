import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //userProfile:{ userid: 0, email: '', username: '', roles:['']}
        userProfile : { user : 'Lolo'},
  },
  getters: {
    userProfile : state => {
            return state.userProfile;
        },
  },
  mutations: {
    setProfile (state, profile){
            state.userProfile = profile;
        },

  },
  actions: {

  }
})

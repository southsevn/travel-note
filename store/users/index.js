export const state = () => ({
  users: []
});

export const getters = {
  USERS: state => state.users
};

export const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  }
};

export const actions = {
  async getUsers({ commit }) {
    await this.$axios.get('/users').then((res) => {
      commit('SET_USERS', res.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

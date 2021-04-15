export const state = () => ({
  user: null,
  token: ''
});

export const getters = {
  USER: state => state.users,
  TOKEN: state => state.token
};

export const mutations = {
  SET_USER(state, payload) {
    state.users = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  }
};

export const actions = {
  async signin({ commit }, { email, password }) {
    await this.$axios.post('/signin', { email, password })
      .then((res) => {
        commit('SET_TOKEN', res.data.accessToken);
      })
      .catch(err => err);
  },
  async logout() {
    this.$auth.logout();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

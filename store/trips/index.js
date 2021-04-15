export const state = () => ({
  trips: [],
  activeTrip: null
});

export const getters = {
  TRIPS: state => state.trips,
  ACTIVE_TRIP: state => state.activeTrip
};

export const mutations = {
  SET_TRIPS(state, payload) {
    state.trips = payload;
  },
  SET_ACTIVE_TRIP(state, payload) {
    state.activeTrip = payload;
  }
};

export const actions = {
  async getTrips({ commit }) {
    await this.$axios.get('/trips').then((res) => {
      commit('SET_TRIPS', res.data);
    });
  },
  async getTripById({ commit }, id) {
    await this.$axios.get(`/trips/${id}`)
      .then((res) => {
        commit('SET_ACTIVE_TRIP', res.data);
      });
  },
  async removeTripById(state, id) {
    await this.$axios.delete(`/trips/${id}`);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

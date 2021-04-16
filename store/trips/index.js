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
  },
  UPDATE_TRIP(state, { id, trip }) {
    state.trips = [
      ...state.trips.filter(nTrip => nTrip.id !== id),
      trip
    ];
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
  async addTrip(state, trip) {
    await this.$axios.post(`/trips`, {
      ...trip
    });
  },
  // eslint-disable-next-line no-shadow
  editExistTrip({ getters, commit }, { id, heading, titleImage, shortDescription, note }) {
    let newTrip = getters.TRIPS.find(trip => trip.id === id);

    newTrip = JSON.parse(JSON.stringify(newTrip));

    newTrip = {
      ...newTrip,
      heading: heading || newTrip.heading,
      titleImage: titleImage || newTrip.titleImage,
      shortDescription: shortDescription || newTrip.shortDescription,
      note: note || newTrip.note
    };

    commit('UPDATE_TRIP', {
      id: newTrip.id,
      trip: newTrip
    });
  },
  updateExistTrip({ commit }, newTrip) {
    this.$axios.put(`/trips/${newTrip.id}`, {
      id: newTrip.id,
      heading: newTrip.heading,
      titleImage: newTrip.titleImage,
      shortDescription: newTrip.shortDescription,
      note: newTrip.note,
      country: newTrip.country,
      dateFrom: newTrip.dateFrom,
      dateTo: newTrip.dateTo,
      coordinates: newTrip.coordinates
    })
      .then(trip => {
        commit('UPDATE_TRIP', {
          id: trip.id,
          trip: trip
        });
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

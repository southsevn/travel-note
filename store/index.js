import Vue from 'vue';
import Vuex from 'vuex';
import trips from './trips';
import user from './user';

Vue.use(Vuex);

new Vuex.Store({
  modules: {
    trips: trips,
    user: user
  }
});

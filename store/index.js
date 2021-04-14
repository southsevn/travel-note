import Vue from 'vue';
import Vuex from 'vuex';
import trips from './trips';
import users from './users';

Vue.use(Vuex);

new Vuex.Store({
  modules: {
    trips: trips,
    users: users
  }
});

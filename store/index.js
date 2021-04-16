import Vue from 'vue';
import Vuex from 'vuex';
import trips from './trips';

Vue.use(Vuex);

new Vuex.Store({
  modules: {
    trips: trips
  }
});

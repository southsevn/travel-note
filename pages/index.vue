<template lang="pug">
  .main-page
    Header(:title="titlePage")
    sui-segment.main-page(v-if="TRIPS" attached)
      sui-grid(:columns="1")
        sui-grid-column(v-for="(trip, idx) in TRIPS" :key="idx")
          TripCard(:trip="trip")
</template>

<script>
  import Header from '@/components/Header/Header';
  import TripCard from '@/components/TripCard/TripCard';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: { TripCard, Header },
    middleware: 'auth',
    data() {
      return {
        titlePage: 'My trips'
      };
    },
    computed: {
      ...mapGetters('trips', ['TRIPS'])
    },
    beforeMount () {
      this.getTrips();
    },
    methods: {
      ...mapActions('trips', ['getTrips'])
    }
  };
</script>

<style lang="sass" scoped>
</style>

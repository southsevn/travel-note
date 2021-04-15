<template lang="pug">
  sui-container.map-page
    Header(:title="pageTitle")
    sui-segment.map-view(attached :loading="isLoaded")
      no-ssr
        l-map(:zoom=3 :center="[45,128]" @ready="isLoaded = false")
          l-tile-layer(url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' detectRetina)
          l-marker(v-for="(trip, idx) in TRIPS" :key="idx" :lat-lng="trip.coordinates" @click="markTrip(trip)")
            l-tooltip(:content="trip.heading")
    sui-segment.trips-table(attached)
      h1(is="sui-header") My Trips
      sui-table(compact)
        sui-table-body
          sui-table-row(v-for="(trip, idx) in TRIPS" :key="idx" :state="activeTrip && activeTrip.id === trip.id ? 'active' : ''")
            sui-table-cell
              sui-flag(:name="trip.country")
            sui-table-cell
              nuxt-link(:to="`/trips/${trip.id}`") {{ trip.heading }}
</template>

<script>
  import Header from '@/components/Header/Header';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Map',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Map',
        isLoaded: true,
        tripsToShow: [],
        activeTrip: null
      };
    },
    computed: {
      ...mapGetters('trips', ['TRIPS'])
    },
    created () {
      this.getTrips();
    },
    methods: {
      ...mapActions('trips', ['getTrips']),
      markTrip(trip) {
        this.activeTrip = trip;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .map-view
    height: 620px
</style>

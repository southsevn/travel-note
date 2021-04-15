<template lang="pug">
  sui-container.map-page
    Header(:title="pageTitle")
    .map-view
      no-ssr
        l-map(:zoom=3 :center="[55.9464418,8.1277591]")
          l-tile-layer(url='http://{s}.tile.osm.org/{z}/{x}/{y}.png')
          l-marker(v-for="(trip, idx) in TRIPS" :key="idx" :lat-lng="trip.coordinates")
</template>

<script>
  import Header from '@/components/Header/Header';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Map',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Map'
      };
    },
    computed: {
      ...mapGetters('trips', ['TRIPS'])
    }
  };
</script>

<style lang="sass" scoped>
  .map-view
    height: 680px
</style>

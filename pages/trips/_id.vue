<template lang="pug">
  sui-segment.trip-page(v-if="ACTIVE_TRIP")
    h1(is="sui-header") {{ ACTIVE_TRIP.heading }}
    sui-image(:src="ACTIVE_TRIP.titleImage")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Trip',
    computed: {
      ...mapGetters('trips', ['ACTIVE_TRIP'])
    },
    beforeMount () {
      this.getTripById(this.$route.params.id);
    },
    methods: {
      ...mapActions('trips', ['getTripById'])
    }
  };
</script>

<style scoped>

</style>

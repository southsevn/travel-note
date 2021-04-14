<template lang="pug">
  sui-card.trip-card.fluid
    nuxt-link(:to="`/trips/${trip.id}`")
      sui-image(:src="trip.titleImage")
    sui-card-content
      sui-card-header.fluid.trip-cart--heading
        a {{ trip.heading }}
        country-flag(:country="trip.country" size="normal" rounded)
      sui-card-meta.trip-cart--date
        sui-icon(name="calendar alternate")
        a {{ trip.dateFrom | dateFilter }}
        | -
        a {{ trip.dateTo | dateFilter }}
</template>

<script>
  import { dateFilter } from '@/filters';

  export default {
    name: 'TNTripCard',
    filters: {
      dateFilter
    },
    props: {
      trip: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style lang="sass" scoped>
  .trip-card
    margin-bottom: $default-padding * 4

    .flag
      float: right
</style>

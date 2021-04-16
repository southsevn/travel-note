<template lang="pug">
  // Only for the view
  sui-card.trip-card.fluid
    nuxt-link(:to="`/trips/${trip.id}`")
      sui-image(:src="trip.titleImage")
    sui-card-content
      sui-card-header.fluid.trip-cart--heading
        a {{ trip.heading }}
        sui-flag(:name="trip.country")
      sui-card-meta.trip-cart--date
        TNTripDate(:from="trip.dateFrom" :to="trip.dateTo")
      sui-card-description {{ trip.shortDescription }}
      SocialActivity
</template>

<script>
  import TNTripDate from '@/components/shared/TNTripDate';
  import SocialActivity from '@/components/SocialActivity/SocialActivity';
  import { dateFilter } from '@/filters';

  export default {
    name: 'TripCard',
    filters: {
      dateFilter
    },
    components: {
      TNTripDate,
      SocialActivity
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

    .social-activity
      margin-top: $default-padding * 2
</style>

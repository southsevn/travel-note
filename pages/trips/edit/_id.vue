<template lang="pug">
  sui-segment.edit-page.page(v-if="ACTIVE_TRIP")
    .trip-page--header
      TNTripHeader(:heading="'Редактирование'")
    sui-image(:src="ACTIVE_TRIP.titleImage")
    sui-form.edit-page--form
      sui-form-field
        label City / Location
        sui-input(placeholder='City / Location' v-model="ACTIVE_TRIP.heading")
      sui-form-field
        label Image Url
        sui-input(placeholder='Image Url' v-model="ACTIVE_TRIP.titleImage")
      sui-form-field
        label Short Description
        textarea(rows='2' v-model="ACTIVE_TRIP.shortDescription")
      sui-form-field
        label Note
        textarea(v-model="ACTIVE_TRIP.note")
      sui-button(type='submit' color="green") Submit
</template>

<script>
  import TNTripHeader from '@/components/shared/TNTripHeader';
  import { activeTrip } from '@/mixins/activeTrip';

  export default {
    name: 'TripEdit',
    components: { TNTripHeader },
    mixins: [activeTrip],
    data() {
      return {
        pageTitle: 'Edit page'
      };
    }
  };
</script>

<style lang="sass" scoped>
  .edit-page
    &--form
      margin-top: $default-padding * 2
</style>

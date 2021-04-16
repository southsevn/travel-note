<template lang="pug">
  sui-segment.edit-page.page(v-if="trip")
    .trip-page--header
      TNTripHeader(:heading="'Редактирование'")
    sui-image(:src="titleImage")
    .edit-page--form(is="sui-form")
      sui-form-field
        label City / Location
        sui-input(placeholder='City / Location' v-model="heading")
      sui-form-field
        label Image Url
        sui-input(placeholder='Image Url' v-model="titleImage")
      sui-form-field
        label Short Description
        textarea(rows='2' v-model="shortDescription")
      sui-form-field
        label Note
        textarea(v-model="note")
      sui-button(@click="updateTrip" color="green") Submit
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import TNTripHeader from '@/components/shared/TNTripHeader';

  export default {
    name: 'TripEdit',
    components: { TNTripHeader },
    middleware: 'auth',
    data() {
      return {
        pageTitle: 'Edit page'
      };
    },
    computed: {
      ...mapGetters('trips', ['TRIPS']),
      trip: {
        set(trip) {
          this.updateExistTrip(trip);
        },
        get() {
          return this.TRIPS.find(trip => trip.id === this.$route.params.id) || null;
        }
      },
      heading: {
        set(heading) {
          this.editExistTrip({
            id: this.trip.id,
            heading: heading
          });
        },
        get() {
          return this.trip.heading;
        }
      },
      titleImage: {
        set(titleImage) {
          this.editExistTrip({
            id: this.trip.id,
            titleImage: titleImage
          });
        },
        get() {
          return this.trip.titleImage;
        }
      },
      shortDescription: {
        set(shortDescription) {
          this.editExistTrip({
            id: this.trip.id,
            shortDescription: shortDescription
          });
        },
        get() {
          return this.trip.shortDescription;
        }
      },
      note: {
        set(note) {
          this.editExistTrip({
            id: this.trip.id,
            note: note
          });
        },
        get() {
          return this.trip.note;
        }
      }
    },
    mounted() {
      if (!this.TRIPS.length) {
        this.getTrips();
      }
    },
    methods: {
      ...mapActions('trips', ['getTrips', 'editExistTrip', 'updateExistTrip']),
      updateTrip() {
        this.updateExistTrip(this.trip);
        this.$router.push('/');
      }
    }
  };
</script>

<style lang="sass" scoped>
  .edit-page
    &--form
      margin-top: $default-padding * 2
</style>

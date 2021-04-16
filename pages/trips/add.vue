<template lang="pug">
  .add-page
    Header(:title="pageTitle")
    sui-segment(attached)
      sui-form.note-form
        sui-form-field
          label City / Location
          sui-input(placeholder='City / Location' v-model="heading")
        sui-form-field
          label City / Location
          no-ssr
            country-select.country-select(v-model="country" :country="country" topCountry="BY")
        sui-form-fields(fields='two')
          sui-form-field
            label Latitude
            input(placeholder='* set in data' type='text' v-model="lat")
          sui-form-field
            label Longitude
            input(placeholder='* set in data' type='text' v-model="long")
        sui-form-field
          label Image Url
          sui-input(placeholder="Image url" v-model="titleImage")
        sui-form-field.note-form-dates
          .date-from
            label Date From
            sui-input(placeholder='Date From' type="date" @change="setFrom")
          .date-to
            label Date To
            sui-input(placeholder='Date To' type="date" @change="setTo")
        sui-form-field
          label Short Description
          textarea(rows='2' v-model="shortDescription")
        sui-form-field
          label Note
          textarea(v-model="note")
      sui-button.add-note--button(type='submit' color="green" @click="addNewTrip") Submit
</template>

<script>
  import Header from '@/components/Header/Header';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'AddTrip',
    middleware: 'auth',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Add trip',
        heading: '',
        country: '',
        titleImage: '/images/trips/7.jpg',
        from: '',
        to: '',
        shortDescription: '',
        note: '',
        lat: '35.0017',
        long: '-115.2830'
      };
    },
    computed: {
      ...mapGetters('trips', ['TRIPS']),
      nextId() {
        const filteredIds = this.TRIPS.map(trip => trip.id).filter((a, b) => a > b);

        return parseInt(filteredIds[filteredIds.length - 1]) + 1;
      }
    },
    beforeMount () {
      this.getTrips();
    },
    methods: {
      ...mapActions('trips', ['addTrip', 'getTrips']),
      setFrom(e) {
        this.from = e.target.value;
      },
      setTo(e) {
        this.to = e.target.value;
      },
      addNewTrip() {
        this.addTrip({
          id: this.nextId,
          titleImage: this.titleImage || `/images/trips/7.jpg`,
          heading: this.heading,
          shortDescription: this.shortDescription,
          note: this.note,
          country: this.country.toLocaleLowerCase(),
          dateFrom: this.from,
          dateTo: this.to,
          coordinates: [this.lat, this.long]
        })
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  };
</script>

<style lang="sass" scoped>
  .note-form-dates
    display: flex
    justify-content: space-between

  .add-note--button
    margin-top: $default-padding * 2
</style>

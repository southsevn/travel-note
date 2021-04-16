<template lang="pug">
  sui-segment.trip-page(v-if="ACTIVE_TRIP")
    .trip-page--header
      TNTripHeader(:heading="ACTIVE_TRIP.heading")
      div(is='sui-button-group')
        sui-button(@click="$router.push(`/trips/edit/${ACTIVE_TRIP.id}`)") Edit
        sui-button-or
        sui-button(@click="deleteTrip" negative) Delete
    sui-image(:src="ACTIVE_TRIP.titleImage")
    SocialActivity
    TNTripDate(:from="ACTIVE_TRIP.dateFrom" :to="ACTIVE_TRIP.dateTo")
    h4(is="sui-header" color="grey") {{ ACTIVE_TRIP.shortDescription }}
    p.trip-page--note {{ ACTIVE_TRIP.note }}
    TNTripComments
    TNBaseModal(
      @onCancel="isShowModal = false"
      @onDeletet="removeTripWrapper"
      :active="isShowModal"
      :header="modal.header"
      :description="modal.description"
    )
</template>

<script>
  import TNTripDate from '@/components/shared/TNTripDate';
  import TNBaseModal from '@/components/shared/TNBaseModal';
  import TNTripHeader from '@/components/shared/TNTripHeader';
  import SocialActivity from '@/components/SocialActivity/SocialActivity';
  import TNTripComments from '@/components/shared/TNTripComments';
  import { activeTrip } from '@/mixins/activeTrip';
  import { mapActions } from 'vuex';

  export default {
    name: 'Trip',
    middleware: 'auth',
    components: {
      SocialActivity,
      TNTripHeader,
      TNTripDate,
      TNBaseModal,
      TNTripComments
    },
    mixins: [activeTrip],
    data() {
      return {
        isShowModal: false,
        modal: {
          header: 'Удаление записи',
          description: 'Подтвердите действие. Вы действительно желаете удалить запись?'
        }
      };
    },
    methods: {
      ...mapActions('trips', ['removeTripById']),
      removeTripWrapper() {
        this.removeTripById(this.ACTIVE_TRIP.id)
          .then(() => {
            this.isShowModal = false;
            this.$router.push('/');
          })
          .catch(err => {
            console.log(err);
          });
      },
      deleteTrip() {
        this.isShowModal = true;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .trip-page
    &--header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: $default-padding

  .trip-date
    margin-top: $default-padding * 2

  .social-activity
    margin-top: $default-padding * 2
</style>

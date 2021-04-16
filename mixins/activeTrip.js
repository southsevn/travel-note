import { mapActions, mapGetters } from 'vuex';

export const activeTrip = {
  computed: {
    ...mapGetters('trips', ['ACTIVE_TRIP'])
  },
  beforeMount () {
    this.getTripById(this.$route.params.id)
      .catch(() => {
        this.$router.push('/');
      });
  },
  methods: {
    ...mapActions('trips', ['getTripById'])
  }
};

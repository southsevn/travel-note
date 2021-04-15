<template lang="pug">
  sui-segment.page-header(attached="top")
    TNLogo(text)
    sui-button-group
      nuxt-link(to="/trips/add" is="sui-button" icon="plus circle" color="green")
      nuxt-link(to="/map" is="sui-button" icon="map marker alternate" color="blue")
      sui-button(icon="sign-out" @click="logout")
</template>

<script>
  import TNLogo from '@/components/shared/TNLogo';
  import { mapActions } from 'vuex';

  export default {
    name: 'Header',
    components: {
      TNLogo
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions('user', ['logout'])
    }
  };
</script>

<style lang="sass" scoped>
 .page-header
   display: flex
   justify-content: space-between
   align-items: center

   h1
    display: inline-block
</style>

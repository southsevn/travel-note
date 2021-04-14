<template lang="pug">
  sui-segment.page-header(attached="top")
    h1(is="sui-header")
      nuxt-link(:to="'/'")
        sui-icon(name="home")
      sui-header-content {{ title }}
    sui-button-group
      sui-button(icon="plus circle" color="green" @click="$router.push('/trips/add')")
      sui-button(icon="map marker alternate" color="blue" @click="$router.push('/map')")
      sui-button(icon="sign-out")
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true
      }
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

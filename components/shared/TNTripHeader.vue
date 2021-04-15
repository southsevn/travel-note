<template lang="pug">
  h2.trip-header(is="sui-header")
    nuxt-link.trip-header--home-link(:to="'/'")
      sui-image.trip-header--image(:src="'/logo-main.svg'" circular)
    | {{ heading }}
</template>

<script>
  export default {
    name: 'TNTripHeader',
    props: {
      heading: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="sass" scoped>
  .trip-header
    margin-bottom: 0
    display: flex
    align-items: center

    &--image
      width: 60px
      margin-right: $default-padding / 2
</style>

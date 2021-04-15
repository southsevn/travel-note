<template lang="pug">
  sui-segment.page-header(attached="top")
    TNLogo(text)
    sui-button-group
      sui-button(icon="plus circle" color="green" @click="$router.push('/trips/add')")
      sui-button(icon="map marker alternate" color="blue" @click="$router.push('/map')")
      sui-button(icon="sign-out")
</template>

<script>
  import TNLogo from '@/components/shared/TNLogo';

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

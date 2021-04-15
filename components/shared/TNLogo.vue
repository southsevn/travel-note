<template lang="pug">
  nuxt-link.tn-logo(:to="'/'")
    sui-image(v-if="!text" :size="size" :src="'/logo-main.svg'" :title="'Travel & Note'")
    h2(v-else is="sui-header")
      sui-image.text-logo-image(:src="'/logo-main.svg'" :title="'Travel & Note'" circular)
      | Travel & Note
</template>

<script>
  export default {
    name: 'TNLogo',
    props: {
      size: {
        type: String,
        required: false,
        default: 'small'
      },
      text: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  };
</script>

<style lang="sass" scoped>
  .tn-logo
    .text-logo-image
      width: 80px
</style>

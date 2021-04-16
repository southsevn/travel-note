<template lang="pug">
  .trip-date
    sui-icon(name="calendar alternate")
    span {{ from | dateFilter }}
    span.date-to {{ to | dateFilter }}
</template>

<script>
  import { dateFilter } from '@/filters';

  export default {
    name: 'TNTripDate',
    filters: {
      dateFilter
    },
    props: {
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="sass">
  .trip-date
    .date-to
      &::before
        content: '-'
        margin-left: 5px
        margin-right: 5px
</style>

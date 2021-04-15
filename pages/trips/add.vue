<template lang="pug">
  .add-page
    Header(:title="pageTitle")
    sui-segment(attached)
      sui-form.note-form
        sui-form-field
          label City / Location
          sui-input(placeholder='City / Location')
        sui-form-field
          label Image Url
          sui-input(placeholder='Image Url')
        sui-form-field.note-form-dates
          .date-from
            label Date From
            sui-input(placeholder='Date From' type="date")
          .date-to
            label Date To
            sui-input(placeholder='Date To' type="date")
        sui-form-field
          label Short Description
          textarea(rows='2')
        sui-form-field
          label Note
          textarea
        sui-button(type='submit' color="green") Submit
</template>

<script>
  import Header from '@/components/Header/Header';

  export default {
    name: 'AddTrip',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Add trip'
      };
    }
  };
</script>

<style lang="sass" scoped>
  .note-form-dates
    display: flex
    justify-content: space-between
</style>

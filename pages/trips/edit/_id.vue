<template lang="pug">
  .edit-page
    Header(:title="pageTitle")
</template>

<script>
  import Header from '@/components/Header/Header';

  export default {
    name: 'TripEdit',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Edit page'
      };
    }
  };
</script>

<style scoped>

</style>

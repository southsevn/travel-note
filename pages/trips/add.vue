<template lang="pug">
  .add-page
    Header(:title="pageTitle")
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

<style scoped>

</style>

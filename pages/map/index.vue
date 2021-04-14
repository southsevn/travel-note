<template lang="pug">
  sui-container.map-page
    Header(:title="pageTitle")
</template>

<script>
  import Header from '@/components/Header/Header';

  export default {
    name: 'Map',
    components: {
      Header
    },
    data() {
      return {
        pageTitle: 'Map'
      };
    }
  };
</script>

<style scoped>

</style>

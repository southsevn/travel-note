<template lang="pug">
  .social-activity
    sui-statistic(horizontal size="mini")
      sui-statistic-value
        sui-icon(name="heart" color="red")
        | {{ randomInteger(30, 100) }}
      sui-statistic-label
        | likes
    sui-statistic(horizontal size="mini")
      sui-statistic-value {{ randomInteger(200, 2000) }}
      sui-statistic-label Views
</template>

<script>
  export default {
    name: 'SocialActivity',
    methods: {
      randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  };
</script>

<style>

</style>

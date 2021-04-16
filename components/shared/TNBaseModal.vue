<template lang="pug">
  sui-modal(v-model='active' basic)
    sui-header(icon="archive" :content="header")
    sui-modal-content
      p {{ description }}
      .actions
        sui-button(@click="$emit('onCancel')" color="red" icon="remove" :content="'Нет'" basic inverted)
        sui-button(@click="$emit('onDelete')" color="green" icon="checkmark" :content="'Да'" inverted)
</template>

<script>
  export default {
    name: 'TNBaseModal',
    props: {
      active: {
        type: Boolean,
        required: true
      },
      header: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>

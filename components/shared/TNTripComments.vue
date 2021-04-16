<template lang="pug">
  sui-comment-group(threaded)
    h3(is='sui-header' dividing) Comments
    sui-comment
      sui-comment-avatar(src='/images/users/matt.jpg')
      sui-comment-content
        a(is='sui-comment-author') Matt
        sui-comment-metadata
          div Today at 5:42PM
        sui-comment-text How artistic!
        sui-comment-actions
          sui-comment-action Reply
    sui-comment
      sui-comment-avatar(src='/images/users/elliot.jpg')
      sui-comment-content
        a(is='sui-comment-author') Elliot Fu
        sui-comment-metadata
          div Yesterday at 12:30AM
        sui-comment-text
          p This has been very useful for my research. Thanks as well!
        sui-comment-actions
          sui-comment-action Reply
      sui-comment-group
        sui-comment
          sui-comment-avatar(src='/images/users/jenny.jpg')
          sui-comment-content
            a(is='sui-comment-author') Jenny Hess
            sui-comment-metadata
              div Just now
            sui-comment-text
              | Elliot you are always so right :)
            sui-comment-actions
              sui-comment-action Reply
    sui-comment
      sui-comment-avatar(src='/images/users/joe.jpg')
      sui-comment-content
        a(is='sui-comment-author') Joe Henderson
        sui-comment-metadata
          div 5 days ago
        sui-comment-text
          | Dude, this is awesome. Thanks so much
        sui-comment-actions
          sui-comment-action Reply
    sui-form.comment-form(reply)
      textarea
      sui-button(content='Add Reply' label-position='left' icon='edit' primary='')
</template>

<script>
  export default {
    name: 'TNTripComments'
  };
</script>

<style lang="sass" scoped>
  .comment-form
    textarea
      margin: $default-padding 0
</style>

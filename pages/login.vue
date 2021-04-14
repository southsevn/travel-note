<template lang="pug">
  sui-container.login-page
    sui-segment.login-page--conteiner
      TNLogo(text)
      sui-image(:src="'/hero-title.jpg'" size="huge")
      h1.login-page--header(is="sui-header") Login
      .login-page--form.ui.form
        sui-form-field
          label Username
          sui-input(
            type='text'
            placeholder='Username'
            autocomplete='off'
            icon="user"
            icon-position="left"
            v-model="userLogin"
            @input="hasCredsErrors = false"
            :loading="isLoaded"
          )
        sui-form-field
          label Password
          sui-input(
            type="password"
            placeholder="Password"
            autocomplete="off"
            icon="lock"
            icon-position="left"
            v-model="userPswd"
            @input="hasCredsErrors = false"
            :loading="isLoaded"
          )
        sui-button(color="blue" content="Login" @click="login" :loading="isLoaded")
        sui-message(error :visible="hasCredsErrors")
          sui-message-header Error
          p {{ errors.userNotFound }}
      sui-divider(horizontal) Or
      sui-button(color="green" icon="sign-in" content="Sign Up" label-position="right" @click="$router.push('/register')")
      sui-message(visible).login-page--hint
        sui-message-header Test creds
        sui-message-list
          sui-message-item
            | Login: {{ testLogin }}
          sui-message-item
            | Password: {{ testPswd }}
</template>

<script>
  import TNLogo from '@/components/shared/TNLogo';
  export default {
    name: 'Login',
    components: { TNLogo },
    methods: {
      login() {
        this.hasCredsErrors = false;
        this.isLoaded = true;

        setTimeout(() => {
          if (this.testLogin === this.userLogin && this.testPswd === this.userPswd) {
            this.$router.push('/');
            this.isLoaded = false;
          } else {
            this.isLoaded = false;
            this.hasCredsErrors = true;
          }
        }, 500);
      }
    },
    data() {
      return {
        testLogin: 'love',
        testPswd: 'travel',
        userLogin: '',
        userPswd: '',
        errors: {
          userNotFound: 'This user not found. Or password wrong!'
        },
        hasCredsErrors: false,
        isLoaded: false
      };
    }
  };
</script>

<style lang="sass" scoped>
</style>

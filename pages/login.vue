<template lang="pug">
  sui-container.login-page
    sui-segment.login-page--conteiner
      TNLogo(text)
      sui-image(:src="'/hero-title.jpg'" size="huge")
      h1.login-page--header(is="sui-header") Login
      .login-page--form.ui.form
        sui-form-field
          label E-mail
          sui-input(
            type='text'
            placeholder='E-mail'
            autocomplete='off'
            icon="user"
            icon-position="left"
            v-model="userEmail"
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
            v-model="userPassword"
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
            | Login: {{ testEmail }}
          sui-message-item
            | Password: {{ testPassword }}
</template>

<script>
  import TNLogo from '@/components/shared/TNLogo';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Login',
    components: { TNLogo },
    computed: {
      ...mapGetters('user', ['TOKEN'])
    },
    methods: {
      ...mapActions('user', ['signin']),
      async login() {
        this.hasCredsErrors = false;
        this.isLoaded = true;

        await this.signin({
          email: this.userEmail,
          password: this.userPassword
        })
          .then(() => {
            this.isLoaded = false;
          })
          .catch(err => {
            console.log(err);
            this.isLoaded = false;
            this.hasCredsErrors = true;
          });
      }
    },
    data() {
      return {
        testEmail: 'love@travel.com',
        testPassword: 'lovetravel',
        userEmail: '',
        userPassword: '',
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

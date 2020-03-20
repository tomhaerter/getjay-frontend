<template>
  <div>
    <ul>
      <li @click="login('google')">Google</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
import mobile from 'is-mobile'

const AuthProviders = {
  // email: firebase.auth.EmailAuthProvider,
  google: firebase.auth.GoogleAuthProvider,
}

export default Vue.extend({
  methods: {
    async login (method: keyof typeof AuthProviders) {
      const Provider = AuthProviders[method]
      const provider = new Provider()

      try {
        const response = await (mobile() ? this.$fireAuth.signInWithRedirect(provider) : this.$fireAuth.signInWithPopup(provider))
        if (!response || !response.user) {
          throw new Error('Could not successfully log you in.')
        }

        const user = response.user
        const idToken = await user.getIdToken()

        this.$emit('authenticated', idToken)
      } catch (e) { }
    },
  },
})
</script>

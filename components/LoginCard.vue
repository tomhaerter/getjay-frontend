<template>
  <transition name="fade">
    <div class="fixed inset-0 z-50 overflow-hidden" v-if="open">
      <div class="backdrop bg-black opacity-75 absolute inset-0" @click="close" />
      <div class="absolute inset-x-0 bottom-0 bg-white rounded-t-lg py-10 px-4">
        <div class="text-center py-5">
          <h5 class="text-xl font-bold tracking-wide mb-10">
            Schön, dass du da bist.<br>Melde dich jetzt an!
          </h5>

          <button class="w-full text-center rounded-xl shadow py-3 mb-3 font-medium" @click="login('google')">
            <i class="fab fa-google mr-1"></i> Login mit Google
          </button>

          <button class="w-full text-center rounded-xl shadow py-3 mb-3 font-medium text-white bg-black">
            <i class="fab fa-apple mr-1"></i> mit Apple fortfahren
          </button>

          <button class="w-full text-center rounded-xl shadow py-3 font-medium bg-pink text-petrol">
            <i class="far fa-envelope mr-1"></i> mit E-Mail anmelden
          </button>
        </div>
      </div>
    </div>
  </transition>
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
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close () {
      this.$emit('close')
    },

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

        this.$emit('close')
      } catch (e) { }
    },
  },
})
</script>

<style scoped>
.fa-google {
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.fade-enter, .fade-leave-to {
  transition: opacity .3s;
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  transition: opacity .3s;
  opacity: 1;
}
</style>

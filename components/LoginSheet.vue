<template>
  <apple-sheet :open="open" @close="close">
    <div class="text-center py-5">
      <h5 class="text-xl font-bold tracking-wide mb-10">
        Schön, dass du da bist.<br>Melde dich jetzt an!
      </h5>

      <button class="w-full py-3 px-4 shadow font-medium mb-3 rounded-xl inline-flex items-center justify-center" @click="login('google')">
        <svg class="fill-current w-4 h-4 mr-2" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)">
            <path d="m9 3.5625c1.3275 0 2.5162 0.4575 3.4537 1.35l2.5688-2.5688c-1.56-1.4512-3.5963-2.3438-6.0225-2.3438-3.5175 0-6.5588 2.0175-8.04 4.9575l2.9925 2.3212c0.70875-2.1338 2.7-3.7162 5.0475-3.7162z" fill="#EA4335"/>
            <path d="m17.618 9.2062c0-0.58875-0.0563-1.1588-0.1425-1.7062h-8.475v3.3825h4.8525c-0.2175 1.11-0.8475 2.055-1.7925 2.6925l2.8988 2.25c1.6912-1.5675 2.6587-3.885 2.6587-6.6188z" fill="#4285F4"/>
            <path d="m3.9488 10.721c-0.18-0.5438-0.285-1.1213-0.285-1.7213s0.10125-1.1775 0.285-1.7212l-2.9925-2.3212c-0.61125 1.215-0.95625 2.5875-0.95625 4.0425 0 1.455 0.345 2.8275 0.96 4.0425l2.9888-2.3212z" fill="#FBBC05"/>
            <path d="m8.9998 18c2.43 0 4.4738-0.7988 5.9588-2.1788l-2.8988-2.25c-0.8062 0.5438-1.845 0.8625-3.06 0.8625-2.3475 0-4.3388-1.5825-5.0513-3.7162l-2.9925 2.3212c1.485 2.9438 4.5263 4.9613 8.0438 4.9613z" fill="#34A853"/>
          </g>
          <defs>
            <clipPath id="a">
              <rect width="18" height="18" fill="#fff"/>
            </clipPath>
          </defs>
        </svg>
        <span>Login mit Google</span>
      </button>

<!--  <button class="w-full text-center rounded-xl shadow py-3 mb-3 font-medium text-white bg-black">-->
<!--    <i class="fab fa-apple mr-1"></i> mit Apple fortfahren-->
<!--  </button>-->

<!--  <button class="w-full text-center rounded-xl shadow py-3 font-medium bg-pink text-petrol">-->
<!--    <i class="far fa-envelope mr-1"></i> mit E-Mail anmelden-->
<!--  </button>-->
    </div>
  </apple-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import AppleSheet from './AppleSheet.vue'
import firebase from 'firebase'
import mobile from 'is-mobile'

const AuthProviders = {
  // email: firebase.auth.EmailAuthProvider,
  google: firebase.auth.GoogleAuthProvider,
}

export default Vue.extend({
  components: {
    AppleSheet,
  },

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

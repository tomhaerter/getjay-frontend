<template>
  <div>
    <div v-if="user">{{ user.displayName }}</div>
    <nuxt-link to="/join" v-else>Join</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    setTimeout(async () => {
      const token = await this.$fireAuth.currentUser!.getIdToken()
      this.$axios.setToken(token, '')

      console.log('Firebase ID Token', token)

      const { data } = await this.$axios('status/auth')
      console.log('auth data', data)
    }, 1000)
  },

  computed: {
    user () {
      return this.$accessor.user.user
    },
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div>
    <div v-if="user">{{ user.displayName }}</div>
    <nuxt-link to="/join" v-else>Join</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mobile from 'is-mobile'

export default Vue.extend({
  mounted () {
    // On desktop we want to show a functional demo for now.
    const demoMode = this.$route.query.mode
    if (!mobile() && demoMode !== 'demo') return this.$router.replace('/demo')

    // Just route to the offers page for now.
    this.$router.replace('/offers')
  },

  computed: {
    user () {
      return this.$accessor.user.user
    },
  },
})
</script>

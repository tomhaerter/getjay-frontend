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

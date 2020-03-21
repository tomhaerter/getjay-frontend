<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mobile from 'is-mobile'

export default Vue.extend({
  layout: 'demo',

  mounted () {
    // Route back on mobile
    if (mobile()) this.$router.replace('/')
  }
})
</script>

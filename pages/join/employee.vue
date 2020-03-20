<template>
  <div>
    <firebase-authentication @authenticated="authenticated" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FirebaseAuthentication from '@/components/FirebaseAuthentication.vue'

export default Vue.extend({
  components: {
    FirebaseAuthentication,
  },

  methods: {
    authenticated () {
      this.$router.replace('/')
    }
  },
})
</script>

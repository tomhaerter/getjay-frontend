<template>
  <profile-content :me="true" class="pt-16" />
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileContent from '~/components/ProfileContent.vue'

export default Vue.extend({
  components: {
    ProfileContent,
  },
  data () {
    return {
      user: {},
    }
  },

  mounted () {
    this.loadUser()
  },

  methods: {
    loadUser () {
      // this.
    }
  }
})
</script>

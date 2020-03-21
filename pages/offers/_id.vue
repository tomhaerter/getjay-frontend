<template>
  <div>{{ offer.title }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Offer } from '~/types'

export default Vue.extend({
  asyncData ({ params, app }) {
    return { offer: { title: 'abc' } }
    /*
    const { data: offer } = await app.$axios.get(`offers/${params.id}`)

    return { offer }
    */
  },

  data () {
    return {
      offer: null as Offer | null,
    }
  },

  methods: {
    expressInterest () {
      // this.offer
    },
  },
})
</script>

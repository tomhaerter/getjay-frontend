<template>
  <div>
    <offer-card :offer="offer" :width="1600" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Offer } from '~/types'
import OfferCard from '~/components/Offers/OfferCard.vue'

export default Vue.extend({
  components: {
    OfferCard,
  },

  asyncData ({ params, app }) {
    return { offer: { id: 512, title: 'Erntehelfer gesucht' } }
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

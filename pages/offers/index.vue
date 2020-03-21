<template>
  <div>
    <OfferCard v-for="(offer, index) in offers" :key="index" :offer="offer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OfferCard from '~/components/Offers/OfferCard.vue'
import { Offer } from '~/types'

export default Vue.extend({
  components: {
    OfferCard,
  },

  computed: {
    offers (): Offer[] {
      return [
        { title: 'abc' },
        { title: 'def' },
        { title: 'ghi' },
      ]
    }
  },
})
</script>

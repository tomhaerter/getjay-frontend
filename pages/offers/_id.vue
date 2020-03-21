<template>
  <div class="-m-4 -mt-20">
    <div class="offer-card overflow-hidden relative">
      <div class="image-wrapper absolute inset-0">
        <img :src="offer.image" :alt="offer.title" />
        <div class="gradient absolute inset-0" />
      </div>

      <div class="card-content absolute inset-0 text-white p-4 flex flex-col justify-end">
        <h3 class="text-xl font-bold">{{ offer.title }}</h3>
        <p class="text-sm">Mo - Mi, 12:00 - 18:00</p>
      </div>

      <div class="absolute inset-x-0 top-12 px-4 flex items-between">
        <a href="#" @click.prevent="$router.back()" class="back text-white cursor-pointer">
          <i class="fas fa-chevron-left mr-1" /> Zurück
        </a>
      </div>
    </div>
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

  async asyncData ({ params, $axios }) {
    const { data: offer } = await $axios.get(`jobOffer/${params.id}`)
    
    return { offer }
  },

  methods: {
    expressInterest () {
      // this.offer
    },
  },
})
</script>

<style scoped>
.offer-card {
  height: 0;
  padding-bottom: 60%;
}

.gradient {
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(19, 49, 77, 0.63) 100%);
}
</style>

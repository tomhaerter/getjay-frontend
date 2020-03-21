<template>
  <div>
    <portal to="title">Übersicht</portal>

    <div class="filters mb-8 -mt-4">
      <label for="search" class="sr-only">Suche</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i class="far fa-search" />
        </div>
        <input id="search" class="block w-full pl-10 pr-3 py-2 bg-catskills rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Suche nach Jobs" />
      </div>
    </div>

    <div class="pills">
      <!-- Alle Jobs -->
      <!-- Gespeicherte Jobs -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <OfferCard v-for="(offer, index) in offers" :key="index" :offer="offer" />
    </div>
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
        { id: 123, title: 'Erntehelfer gesucht!' },
        { id: 523, title: 'Unterstützung im Altenheim' },
        { id: 572, title: 'Erntehelfer am Wochenende' },
      ]
    }
  },
})
</script>

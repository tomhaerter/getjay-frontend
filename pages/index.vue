<template>
  <div>
    <portal to="title">Übersicht</portal>

    <div class="filters mb-6 mt-2">
      <label for="search" class="sr-only">Suche</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i class="far fa-search" />
        </div>
        <input id="search" class="block w-full pl-10 pr-3 py-2 bg-catskills rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Suche nach Jobs" />
      </div>
    </div>

    <div class="pills mb-6" v-if="user">
      <button class="p-1 px-2 rounded-lg focus:outline-none" :class="mode == 'all' ? 'bg-pink font-semibold tracking-wide' : 'text-gray-400'" @click="mode = 'all'">
        Alle Jobs
      </button>
      <button class="p-1 px-2 rounded-lg focus:outline-none" :class="mode == 'saved' ? 'bg-pink font-semibold tracking-wide' : 'text-gray-400'" @click="mode = 'saved'">
        Gespeicherte Jobs
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <offer-card v-for="offer in offers" :key="offer.id" :offer="offer" />
      <div class="pt-3 px-6 text-center leading-narrow" v-if="!offers.length">
        Zu diesen Filtern konnten leider keine Ergebnisse gefunden werden.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OfferCard from '~/components/Offers/OfferCard.vue'
import { IJobOffer } from '~/types'

export default Vue.extend({
  components: {
    OfferCard,
  },

  data () {
    return {
      allOffers: [] as IJobOffer[],
      savedOffers: [] as IJobOffer[],
      limit: 20,
      offset: 0,
      mode: 'all',
    }
  },

  mounted () {
    this.loadData()
  },

  computed: {
    user () {
      return this.$accessor.user.user
    },

    bookmarkedOffers (): IJobOffer[] {
      return this.$accessor.user.bookmarks
    },

    offers (): IJobOffer[] {
      return this.mode === 'all' ? this.allOffers : this.bookmarkedOffers
    }
  },

  methods: {
    async loadData (offset: number = 0) {
      if (process.server) return
      const { data } = await this.$axios.get('jobOffer')

      if (offset < this.offset) {
        this.offset = 0
        this.allOffers = data
      } else {
        this.offset += this.limit
        this.allOffers.push(...data)
      }
    },
  },
})
</script>

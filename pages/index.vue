<template>
  <div>
    <div class="sticky pb-4 pt-16 mb-2 top-0 bg-white z-50">
      <h2 class="text-3xl font-bold leading-tight text-gray-900">
        Übersicht
      </h2>

      <div class="filters mt-2 flex" :class="{ 'mb-4': user }">
        <label for="search" class="sr-only">Suche</label>
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="far fa-search" />
          </div>
          <input id="search" v-model="searchString" class="block w-full pl-10 pr-3 py-2 bg-catskills rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Suche nach Jobs" />
        </div>

        <button class="block px-3 py-1 rounded-md bg-catskills ml-2 focus:outline-none" @click="filtersVisible = true">
          <i class="far fa-filter" />
        </button>
      </div>

      <filter-list :filters="filters" @close="filtersClose" @save="updateFilters" :open="filtersVisible" />

      <div class="pills" v-if="user">
        <button class="p-1 px-2 rounded-lg focus:outline-none" :class="mode == 'all' ? 'bg-pink font-semibold tracking-wide' : 'text-gray-400'" @click="mode = 'all'">
          Alle Jobs
        </button>
        <button class="p-1 px-2 rounded-lg focus:outline-none" :class="mode == 'saved' ? 'bg-pink font-semibold tracking-wide' : 'text-gray-400'" @click="mode = 'saved'">
          Gespeicherte Jobs
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
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
import FilterList from '~/components/FilterList.vue'
import { IJobOffer } from '~/types'
import { debounce } from 'lodash'

export default Vue.extend({
  components: {
    OfferCard,
    FilterList,
  },

  data () {
    return {
      allOffers: [] as IJobOffer[],
      savedOffers: [] as IJobOffer[],
      limit: 20,
      offset: 0,
      mode: 'all',
      filtersVisible: false,
      filters: {
        categories: []
      },
      searchString: '',
    }
  },

  mounted () {
    this.loadData()

    this.$watch('searchString', debounce((newValue: string) => {
      this.loadData(0)
    }, 500, { trailing: true }))
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

      const { data } = await this.$axios.get('jobOffer', {
        params: {
          search: this.searchString,
          categories: this.filters.categories,
        }
      })

      // In our demo we don't have enough entries for true pagination / infinite scrolling.
      // @TODO: Implement in the future
      this.allOffers = data
    },

    async updateFilters(filters: any) {
      this.filters.categories = filters["categories"]
      await this.loadData()
    },
    async filtersClose() {
      this.filtersVisible = false
      await this.loadData()
    }
  },
})
</script>

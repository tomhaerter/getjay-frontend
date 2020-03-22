<template>
  <nuxt-link :to="`/offers/${offer.id}`" :title="`Mehr über '${offer.title}' erfahren`">
    <div class="offer-card rounded-lg overflow-hidden relative">
      <div class="image-wrapper absolute inset-0">
        <img :src="offer.imageURI" :alt="offer.title" />
        <div class="gradient absolute inset-0" />
      </div>
      <div class="card-content absolute inset-0 text-white p-4 pb-3 flex flex-col justify-end">
        <h3 class="text-xl font-bold">{{ offer.title }}</h3>
        <p class="text-sm opacity-75">Mo - Mi, 12:00 - 18:00</p>
      </div>

      <button class="absolute bottom-2 right-3 text-white text-xl px-1 focus:outline-none" @click.stop.prevent="toggleBookmark" v-if="user">
        <i class="fas fa-bookmark" v-if="isBookmarked" />
        <i class="far fa-bookmark" v-else />
      </button>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IJobOffer } from '~/types'
import { UserInfo } from 'firebase'

export default Vue.extend({
  props: {
    offer: {
      type: Object as PropType<IJobOffer>,
      required: true,
    },
    width: {
      type: Number as PropType<number>,
      default: 800,
    },
  },
  
  methods: {
    async toggleBookmark () {
      await this.$accessor.user.toggleBookmark(this.offer)
    },
  },

  computed: {
    user (): UserInfo | undefined {
      return this.$accessor.user.user
    },

    isBookmarked (): boolean {
      const bookmarks = this.$accessor.user.bookmarks
      return bookmarks.map(o => o.id).indexOf(this.offer.id) !== -1
    },
  },
})
</script>

<style scoped>
.offer-card {
  height: 0;
  padding-bottom: 50%;
}

.gradient {
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(19, 49, 77, 0.63) 100%);
}
</style>

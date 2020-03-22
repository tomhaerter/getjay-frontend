<template>
  <div class="offer-wrapper -m-4 -mt-20 pt-16" :class="{ loggedin: user }">
    <div class="offer-card sticky top-0 z-50 mb-3">
      <div class="image-wrapper absolute inset-0">
        <img :src="offer.imageURI" :alt="offer.title" class="object-cover w-full h-full"/>
        <div class="gradient absolute inset-0" />
      </div>

      <div class="card-content absolute inset-0 text-white p-4 flex flex-col justify-end">
        <h3 class="text-xl font-bold">{{ offer.title }}</h3>
        <p class="text-sm opacity-75">Mo - Mi, 12:00 - 18:00</p>
      </div>

      <div class="absolute inset-x-0 top-12 px-4 flex items-between">
        <a href="#" @click.prevent="$router.back()" class="back text-white cursor-pointer">
          <i class="fas fa-chevron-left mr-1" /> Zurück
        </a>
      </div>

      <div class="payment rounded-full bg-salmon absolute right-4 text-white pt-5 text-center">
        <p class="font-semibold leading-none">{{ offer.payment }} €</p>
        <p class="interval font-thin opacity-75 leading-tight">/Std.</p>
      </div>
    </div>

    <div class="px-4 pt-6 pb-3">
      <employer-banner :offer="offer" />

      <section class="mt-10">
        <h3 class="font-semibold mb-2">Ihre Aufgaben</h3>
        <ul>
          <li class="mb-2 leading-tight">Spargelstechen</li>
          <li class="leading-tight">Zum Teil körperlich anstrengende Tätigkeiten</li>
        </ul>
      </section>

      <section class="mt-8">
        <h3 class="font-semibold mb-2">Beschreibung</h3>
        <div v-html="offer.description" />
      </section>

      <section class="mt-8">
        <h3 class="font-semibold mb-2">Anforderungen</h3>
        <ul>
          <li class="mb-2 leading-tight">Berufserfahrung als Landwirtschaftshelfer (m/w/d)</li>
          <li class="mb-2 leading-tight">Keine Angst vor Arbeit im Freien</li>
          <li class="mb-2 leading-tight">Belastbarkeit, Ausdauer und Motivation</li>
        </ul>
      </section>
    </div>

    <div class="fixed i-want-to-help w-full bg-white border-top-gray border-t p-4" v-if="user">
      <button class="w-full bg-pink py-3 font-semibold rounded-lg" @click="acceptOffer">Ich möchte helfen</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IJobOffer } from '~/types'
import OfferCard from '~/components/Offers/OfferCard.vue'
import EmployerBanner from '~/components/Offers/EmployerBanner.vue'

type PageData = {
  offer?: IJobOffer
}

export default Vue.extend({
  components: {
    OfferCard,
    EmployerBanner,
  },

  data(): PageData {
    return {}
  },

  async asyncData ({ params, $axios }) {
    const { data: offer } = await $axios.get(`jobOffer/${params.id}`)

    return { offer }
  },

  methods: {
    async acceptOffer () {
      const { data: msg } = await this.$axios.post(`jobOffer/${this.offer!.id}/accept`)
      console.log(msg)
      await this.$router.push(`/jobs/${msg.jobOfferId}/chat`)
    }
  },

  computed: {
    user () {
      return this.$accessor.user.user
    },
  },
})
</script>

<style scoped>
.offer-wrapper.loggedin {
  padding-bottom: 90px;
}

.offer-card {
  height: 0;
  padding-bottom: 60%;
}

.gradient {
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(19, 49, 77, 0.63) 100%);
}

.payment {
  width: 60px;
  height: 60px;
  bottom: -30px;
}

.payment .interval {
  font-size: 0.65rem;
}

ul {
  padding-left: 20px;
}

ul li {
  position: relative;
}

ul li::after {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  border-radius: 9999px;
  background-color: #E38466;
  left: -20px;
  top: 6px;
}

.i-want-to-help {
  bottom: 68px;
}
</style>

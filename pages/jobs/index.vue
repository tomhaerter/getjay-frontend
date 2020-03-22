<template>
  <div>
    <div class="pt-16 mb-4">
      <h2 class="text-3xl font-bold leading-tight text-gray-900">
        Meine Jobs
      </h2>
    </div>

    <!--<div class="filters mb-8 mt-2">
      <label for="search" class="sr-only">Suche</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i class="far fa-search" />
        </div>
        <input id="search" class="block w-full pl-10 pr-3 py-2 bg-catskills rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Suche nach Jobs" />
      </div>
    </div>-->

    <div class="active mb-10">
      <h3 class="text-xs pb-2 font-bold uppercase border-gray-100 border-b-2">
        Aktiv
      </h3>

      <div v-for="ch in chats" :key="ch.id" class="chat">
        <nuxt-link :to="`jobs/${ch.jobOfferId}/chat`">
          <div class="py-2 flex job items-center">
            <div class="image mr-2">
              <div class="image rounded-full bg-catskills overflow-hidden flex items-center justify-center">
                <img src="~/assets/bauer-logo.png" alt="Bauernhof Wieland" />
              </div>
            </div>

            <div class="relative top-px flex-1 min-w-0">
              <p class="leading-none">{{ ch.jobOffer.title }}</p>
              <p class="text-gray-400 text-xs leading-narrow pr-2 truncate">
                <span v-if="ch.messages[ch.messages.length-1]">
                  {{ ch.messages[ch.messages.length-1].message.substr(0, 60) }}
                </span>
                <span v-else>Noch keine Nachrichten ausgetauscht</span>
              </p>
            </div>

            <div class="self-start text-xs text-gray-400 ml-auto pt-1">
              14:31 <i class="fas fa-chevron-right ml-1" />
            </div>
          </div>
        </nuxt-link>
      </div>

      <!--<div class="py-2 flex job items-center">
        <div class="image mr-2">
          <img src="/" alt="Bauernhof Wieland" />
        </div>
        <div class="relative top-px">
          <p class="leading-none">Bauernhof Maiberger</p>
          <p class="text-gray-400 text-xs leading-narrow">Passt Montag?</p>
        </div>
        <div class="self-start text-xs text-gray-400 ml-auto pt-1">
          18:05 <i class="fas fa-chevron-right ml-1" />
        </div>
      </div>
    </div>-->

      <!--<div class="active">
        <h3 class="text-xs pb-2 font-bold uppercase border-gray-100 border-b-2">Ausstehend</h3>

        <div class="py-2 flex job items-center">
          <div class="image mr-2">
            <img src="/" alt="Bauernhof Wieland" />
          </div>
          <div class="relative top-px">
            <p class="leading-none">REWE</p>
            <p class="text-gray-400 text-xs leading-narrow">Ich bin dabei!</p>
          </div>
          <div class="self-start text-xs text-gray-400 ml-auto pt-1">
            16:12 <i class="fas fa-chevron-right ml-1" />
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('chat')
    
    const chats = await Promise.all(data.map(async (chat: any) => {
      const { data: jobOffer } = await $axios.get(`jobOffer/${chat.jobOfferId}`)
      
      return { ...chat, jobOffer }
    }))
    console.log(chats)
    return { chats }
  },
})
</script>

<style lang="scss">
  .job {
    @apply border-gray-100 border-b-2;

    .image {
      @apply rounded-full bg-catskills overflow-hidden;
      width: 40px;
      height: 40px;
    }
  }
</style>

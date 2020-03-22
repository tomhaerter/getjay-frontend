<template>
  <div class="msgs pt-16">
    <div class="msg" v-for="msg in conversation.messages" :key="msg.id">
      {{msg.message}}
      {{msg.createdAt}}
      <br>
      <br>
    </div>

    <label for="message" class="sr-only">Suche</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i class="far fa-search" />
      </div>
      <input id="message" class="block w-full pl-10 pr-3 py-2 bg-catskills rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out" placeholder="Schreibe eine Nachricht" v-model="chatMessage"/>
    </div>
    <button @click="sendMessage">SEND</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {IConversation} from '~/types'
  import OfferCard from '~/components/Offers/OfferCard.vue'

  type PageData = {
    conversation?: IConversation,
    chatMessage: string,
    refreshID: number
  }

  export default Vue.extend({
    components: {
      OfferCard,
    },

    data(): PageData {
      return {
        chatMessage: '',
        refreshID: -1
      }
    },

    methods: {
      async sendMessage() {
        const {data: msg} = await this.$axios.post(`chat/${this.conversation?.jobOfferId}/send`, {message: this.chatMessage});
        this.conversation?.messages.push(msg);
        this.chatMessage = '';
      },
      async refresh() {
        const {data: conversation} = await this.$axios.get(`chat/${this.conversation?.jobOfferId}`);

        this.conversation = conversation;
      }
    },

    mounted() {
      this.refreshID = setInterval(this.refresh, 1000) as unknown as number;
    },
    beforeDestroy() {
      clearInterval(this.refreshID);
    },

    async asyncData({params, $axios}) {
      const {data: conversation} = await $axios.get(`chat/${params.id}`);

      return {conversation}
    },

    computed: {
      user() {
        return this.$accessor.user.user
      },
    },
  })
</script>

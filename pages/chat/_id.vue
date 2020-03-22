<template>
  <div class="msgs pt-16">
    <div class="msg" v-for="msg in conversation.messages" :key="msg.id">
      {{msg.message}}
      {{msg.createdAt}}
      <br>
      <br>
    </div>

    <div class="message-input">
      <input v-model="chatMessage" type="text" @keyup.enter="sendMessage">
      <i class="far fa-paper-plane" @click="sendMessage"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IConversation } from '~/types'
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

  async asyncData ({ params, $axios }) {
    const { data: conversation } = await $axios.get(`chat/${params.id}`)

    return { conversation }
  },

  data (): PageData {
    return {
      chatMessage: '',
      refreshID: -1
    }
  },

  computed: {
    user () {
      return this.$accessor.user.user
    },
  },

  mounted () {
    this.refreshID = setInterval(this.refresh, 1000) as unknown as number
  },
  beforeDestroy () {
    clearInterval(this.refreshID)
  },

  methods: {
    async sendMessage () {
      if (this.chatMessage.length > 0) {
        const { data: msg } = await this.$axios.post(`chat/${this.conversation?.jobOfferId}/send`, { message: this.chatMessage })
        // eslint-disable-next-line no-unused-expressions
        this.conversation?.messages.push(msg)
        this.chatMessage = ''
      }
    },
    async refresh () {
      const { data: conversation } = await this.$axios.get(`chat/${this.conversation?.jobOfferId}`)

      this.conversation = conversation
    },
    isMessageAuthor (msg : any) {
      if (this.conversation) {
        return msg.authorId === this.conversation.workerId
      }
      return false
    }
  },
})
</script>

<style scoped lang="sass">
  .message-container
    .messages
      display: flex
      flex-direction: column
      .message
        width: fit-content
        max-width: 80%
        margin-bottom: 3px
        background: #E5E8EB
        padding: 8px 12px
        color: #13314D
        border-radius: 20px

        &.me
          align-self: flex-end
          background-color: #13314D
          color: #FFFFFF

        &:last-child
          margin-bottom: 12px

    .message-input
      display: flex
      height: 66px
      background-color: #F8F8F8

      input
        width: 100%
        height: 42px
        border-radius: 11px
        background-color: #E5E8EA

      i
        font-size: 24px
    //

</style>

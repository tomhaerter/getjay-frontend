<template>
  <div>{{ offer.title }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Offer } from '~/types'

export default Vue.extend({
  props: {
    offer: {
      type: Object as PropType<Offer>,
      required: true,
    },
  },
})
</script>

<template>
  <transition name="fade">
    <div class="fixed inset-0 z-50 overflow-hidden" v-if="open">
      <div class="backdrop bg-black opacity-75 absolute inset-0" @click="close" />
      <div class="sheet-content absolute inset-x-0 bottom-0 bg-white rounded-t-lg pb-10 pt-5 px-4 overflow-y-scroll">
        <slot>
          <span class="font-bold text-center py-10">Sheet content missing</span>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },

  watch: {
    open (nowOpen, previouslyOpen) {
      if (nowOpen) {
        document.body.classList.add('with-sheet')
      } else {
        document.body.classList.remove('with-sheet')
      }
    },
  },

  methods: {
    close () {
      this.$emit('close')
    },
  }
})
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  transition: opacity .3s;
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  transition: opacity .3s;
  opacity: 1;
}

.sheet-content {
  max-height: calc(100vh - 50px);
}

.sheet-content::-webkit-scrollbar {
  display: none;
}
</style>

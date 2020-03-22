<template>
  <div class="flex justify-start relative employer-banner">
    <img src="" class="icon rounded-full bg-catskills" />
    <div class="ml-4">
      <h3 class="name font-semibold text-l leading-narrow">Bauernhof Wieland</h3>
      <p class="text-xs">Dorfstraße Nr. 14, 23769 Fehmarn</p>

      <div class="categories mt-2">
        <span class="category text-xs text-white bg-petrol rounded-md uppercase py-1 px-2">Landwirtschaft</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    offer: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.icon {
  width: 50px;
  height: 50px !important;
}
</style>

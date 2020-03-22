<template>
  <div class="flex justify-start relative employer-banner">
    <div class="icon rounded-full bg-catskills overflow-hidden flex items-center justify-center">
      <img src="~/assets/bauer-logo.png" />
    </div>
    <div class="ml-4">
      <h3 class="name font-semibold text-l leading-narrow">{{offer.title}}</h3>
      <p class="text-xs">Dorfstraße Nr. 14, 23769 Fehmarn</p>

      <div class="categories mt-2">
        <span class="category text-xs text-white bg-petrol rounded-md uppercase py-1 px-2">{{category}}</span>
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
  mounted() {
    console.log(this.offer);
  },
  computed: {
    category() {
      if (this.offer.categories.length > 0) {
        switch (this.offer.categories[0]) {
          case "1": return 'Landwirtschaft'
          case "2": return 'Medizin'
          case "3": return 'Pflege'
          case "4": return 'Logistik'
          default: return 'Sonstiges'
        }
      }

      return 'Sonstiges'
    }
  },
})
</script>

<style scoped>
.icon {
  width: 50px;
  height: 50px !important;
}
</style>

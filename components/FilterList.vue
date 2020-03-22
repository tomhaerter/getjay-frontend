<template>
  <apple-sheet :open="open" @close="close">
    <div class="h-full">
      <div class="top-0 inset-x-0 flex mb-6">
        <div class="flex justify-center flex-1">
          <button class="mr-auto" @click="close"><i class="far fa-times" /></button>
        </div>

        <h5 class="flex justify-center flex-1 font-bold">Filter</h5>

        <div class="flex justify-center flex-1 font-bold text-salmon">
          <button class="ml-auto" @click="save">Fertig</button>
        </div>
      </div>

      <div class="">
        <p class="text-xs font-bold mb-1 uppercase">Kategorien</p>
        <ul>
          <li v-for="(category, index) in categories" :key="category.id">
            <label
              :for="`filter-category-${category.id}`"
              class="block w-full py-2 px-3"
              :class="{
                'checked': categoryChecked(index),
                'rounded-t-lg': !categoryChecked(index - 1),
                'rounded-b-lg': !categoryChecked(index + 1),
              }"
            >
              <input
                type="checkbox"
                class="hidden"
                :id="`filter-category-${category.id}`"
                :checked="categoryChecked(index)"
                @change="checkCategory(index)" />

              <span class="checkbox">
                <i class="checkmark far fa-check fa-xs" />
              </span>
              {{ category.title }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </apple-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import AppleSheet from './AppleSheet.vue'

export default Vue.extend({
  components: {
    AppleSheet,
  },

  props: {
    initialFilters: {
      type: Object,
      default: () => ({
        categories: [],
      }),
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  
  data () {
    return {
      filters: {
        categories: [] as number[],
      },
      categories: [
        { id: 1, title: 'Landwirtschaft' },
        { id: 2, title: 'Medizin' },
        { id: 3, title: 'Pflege' },
        { id: 4, title: 'Logistik' },
        { id: 5, title: 'Sonstige' },
      ],
    }
  },

  watch: {
    open (nowOpen, previouslyOpen) {
      if (nowOpen && !previouslyOpen) {
        this.filters = this.initialFilters
      }
    },
  },

  methods: {
    close () {
      this.$emit('close')
    },

    save () {
      this.$emit('save', this.filters)
      this.$emit('close')
    },

    categoryChecked (index: number): boolean {
      const checkedCategories = this.filters.categories
      if (!checkedCategories) return false

      const category = this.categories[index]
      if (!category) return false
      return checkedCategories.indexOf(category.id) !== -1
    },

    checkCategory (index: number) {
      const checkedCategories = this.filters.categories
      if (!checkedCategories) this.filters.categories = []

      const id = this.categories[index].id
      const foundIndex = this.filters.categories.indexOf(id)

      if (foundIndex == -1) this.filters.categories.push(id)
      else this.filters.categories.splice(foundIndex, 1)
    }
  },
})
</script>

<style scoped lang="scss">
.checkbox {
  @apply inline-block relative mr-2 rounded border-2 border-gray-200 text-white;
  top: 4px;
  width: 20px;
  height: 20px;

  .checkmark {
    position: relative;
    top: -5px;
    left: 2px;
    visibility: hidden;
  }
}

.checked {
  @apply bg-pink font-semibold;

  .checkbox {
    @apply border-petrol bg-petrol;
  }

  .checkmark {
    visibility: visible;
  }
}
</style>

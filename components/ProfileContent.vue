<template>
  <div>
    <div>
      <div class="title flex items-center">
        <div class="avatar overflow-hidden rounded-full" style="width: 70px;height: 70px;">
          <img src="https://i.pravatar.cc/100?img=59" alt="Peter Lustig" />
        </div>
        <div class="name ml-5">
          <p class="text-3xl leading-tight font-bold">Peter</p>
          <p class="text-xl -mt-1">Lustig</p>
        </div>
      </div>

      <ul class="fa-ul text-gray-400 text-sm mt-3">
        <li class="py-1">
          <span class="fa-li"><i class="far fa-envelope" /></span>
          pet.lustig@gmail.com
        </li>
        <li class="py-1">
          <span class="fa-li"><i class="far fa-phone" /></span>
          +49 15486 156744
        </li>
        <li class="py-1">
          <span class="fa-li"><i class="far fa-star" /></span>
          30 Bewertungen
        </li>
      </ul>      
    </div>

    <blockquote class="font-bold italic mt-5 mb-8 relative pt-5">
      Ich helfe gerne wo ich kann!

      <div class="absolute top-0 left-0 text-pink">
        <i class="fas fa-quote-left" />
      </div>
    </blockquote>

    <section>
      <h5 class="font-bold text-sm uppercase">Info</h5>
      <ul class="fa-ul">
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-house" /></span>
          Lebt in Hamburg, Deutschland
        </li>
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-comments-alt" /></span>
          Spricht Deutsch, Englisch
        </li>
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-suitcase" /></span>
          Hat Landschaftsgärtner gelernt
        </li>
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-birthday-cake" /></span>
          ist 42 Jahre alt
        </li>
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-clock" /></span>
          Mo - Di, 15:00-18:00 Uhr
        </li>
      </ul>
    </section>

    <section class="border-t border-gray-200 pt-3 mt-6">
      <h5 class="font-bold text-sm uppercase">Qualifikationen</h5>
      <ul class="fa-ul">
        <li class="py-1">
          <span class="fa-li text-salmon"><i class="far fa-check-circle" /></span>
          Führerschein Klasse B, C
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
})
</script>

<style scoped>
.fa-ul {
  margin-left: 2rem !important;
}

.fa-li {
  left: -2.4rem;
}
</style>
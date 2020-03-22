<template>
  <div>
    <div>
      <div class="title flex items-center">
        <div class="avatar overflow-hidden rounded-full" style="width: 70px;height: 70px;">
          <img :src="photoURL" :alt="firstName + ' ' + lastName">
        </div>
        <div class="name ml-5">
          <p class="text-3xl leading-tight font-bold">
            {{firstName}}
          </p>
          <p class="text-xl -mt-1">
            {{lastName}}
          </p>
        </div>
      </div>

      <ul class="fa-ul text-gray-400 text-sm mt-3">
        <li class="py-1">
          <span class="fa-li"><i class="far fa-envelope" /></span>
          {{email}}
        </li>
        <li class="py-1">
          <span class="fa-li"><i class="far fa-phone" /></span>
          {{phoneNumber}}
        </li>
        <li class="py-1">
          <span class="fa-li"><i class="far fa-star" /></span>
          {{reviewCount}} Bewertungen
        </li>
      </ul>
    </div>

    <blockquote class="font-bold italic mt-5 mb-8 relative pt-5">
      {{description}}

      <div class="absolute top-0 left-0 text-pink">
        <i class="fas fa-quote-left" />
      </div>
    </blockquote>

    <section>
      <h5 class="font-bold text-sm uppercase">
        Info
      </h5>
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
      <h5 class="font-bold text-sm uppercase">
        Qualifikationen
      </h5>
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
  props: {
    me: {
      type: Boolean,
    }
  },
  data () {
    return {
      photoURL: 'https://i.pravatar.cc/100?img=59',
      firstName: 'Peter',
      lastName: 'Lustig',
      email: 'pet.lustig@gmail.com',
      phoneNumber: '+49 15486 156744',
      reviewCount: 30,
      description: 'Ich helfe gerne wo ich kann!',
    }
  },
  mounted (): void {
    if (this.me) {
      this.loadCurrentUser()
    }
  },
  methods: {
    loadCurrentUser () {
      if (this.$store.$fireAuth.currentUser?.photoURL) {
        this.photoURL = this.$store.$fireAuth.currentUser?.photoURL
      }
      if (this.$store.$fireAuth.currentUser?.displayName) {
        this.firstName = this.$store.$fireAuth.currentUser?.displayName.split(' ')[0]
        this.lastName = this.$store.$fireAuth.currentUser?.displayName.split(' ')[1]
      }
      if (this.$store.$fireAuth.currentUser?.email) {
        this.email = this.$store.$fireAuth.currentUser?.email
      }
      if (this.$store.$fireAuth.currentUser?.phoneNumber) {
        this.phoneNumber = this.$store.$fireAuth.currentUser?.phoneNumber
      }
    },
  },

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

import { Plugin } from '@nuxt/types'
import { IJobOffer } from '~/types'

const authPlugin: Plugin = ({ app, $axios }) => {
  app.$fireAuth.onAuthStateChanged(async (user) => {
    app.$accessor.user.setUser(user)

    if (user) {
      const idToken = await user.getIdToken()
      app.$accessor.user.setIdToken(idToken)

      const { data: offers } = await $axios.get(`user/me/bookmarkedJobOffers`)
      app.$accessor.user.setBookmarks(offers as IJobOffer[])
    }
  })
}

export default authPlugin

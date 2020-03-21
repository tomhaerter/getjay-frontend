import { Plugin } from '@nuxt/types'

const authPlugin: Plugin = ({ app }) => {
  app.$fireAuth.onAuthStateChanged(async (user) => {
    app.$accessor.user.setUser(user)

    const idToken = await user?.getIdToken()
    app.$accessor.user.setIdToken(idToken)
  })
}

export default authPlugin

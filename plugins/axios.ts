import { Plugin } from '@nuxt/types'
import jwt from 'jsonwebtoken'
import moment from 'moment'

const axiosPlugin: Plugin = ({ app, $axios }) => {
  /**
   * Returns a valid id token if at all possible. It tries to read the token
   * from the Vuex store, validates its expiration time and possibly retrieves
   * a new token directly from Firebase.
   * 
   * @throws if the user is unauthenticated or no valid token could be retrieved.
   */
  async function validIdToken () {
    let token = app.$accessor.user.idToken

    try {
      const decodedToken = jwt.decode(token, { json: true })
      if (!decodedToken) throw new Error('Invalid JWT')

      const expiryDate = moment.unix(decodedToken.exp)
      const now = moment().add(1, 'minute') // Add a bit of leeway

      if (now.isAfter(expiryDate)) throw new Error('Expired JWT')
    } catch (e) {
      const user = app.$fireAuth.currentUser
      if (!user) throw new Error('Unauthenticated')

      token = await user.getIdToken()
    }

    return token
  }

  $axios.onRequest(async (config) => {
    try {
      const idToken = await validIdToken()
      config.headers.common.Authorization = idToken
    } catch (e) {}

    return config
  })
}

export default axiosPlugin

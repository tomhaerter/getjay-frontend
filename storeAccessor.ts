import { getAccessorType } from 'typed-vuex'

import * as user from './store/user'

export default getAccessorType({
  modules: {
    user,
  },
})

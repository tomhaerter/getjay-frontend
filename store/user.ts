import { getAccessorType, mutationTree } from 'typed-vuex'
import * as firebase from 'firebase'

export const state = () => ({
  user: undefined as firebase.UserInfo | undefined,
  idToken: '' as string,
})

export type RootState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  setUser (state, user: firebase.User | null) {
    state.user = user?.toJSON() as firebase.UserInfo | undefined
  },

  setIdToken (state, token: string | null) {
    state.idToken = token || ''
  },
})

export const accessorType = getAccessorType({
  state,
  mutations,
})

import { getAccessorType, mutationTree, actionTree, getterTree } from 'typed-vuex'
import * as firebase from 'firebase'
import { IJobOffer } from '~/types'

export const state = () => ({
  user: undefined as firebase.UserInfo | undefined,
  idToken: '' as string,
  demoMode: false,
  bookmarks: [] as IJobOffer[],
})

export type RootState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  setUser (state, user: firebase.User | null) {
    state.user = user?.toJSON() as firebase.UserInfo | undefined
  },

  setIdToken (state, token: string | null) {
    state.idToken = token || ''
  },

  enableDemoMode (state) {
    state.demoMode = true
  },

  setBookmarks (state, newBookmarks: IJobOffer[]) {
    state.bookmarks = newBookmarks
  },
})

export const actions = actionTree({ state, mutations }, {
  async toggleBookmark ({ commit, state }, offer: IJobOffer) {
    await this.$axios.post(`jobOffer/${offer.id}/bookmark`)

    const bookmarks = Array.from(state.bookmarks)
    const index = bookmarks.map(o => o.id).indexOf(offer.id)
    if (index === -1) {
      bookmarks.push(offer)
    } else {
      bookmarks.splice(index, 1)
    }

    commit('setBookmarks', bookmarks)
  },
})

export const getters = getterTree(state, {
  bookmarkedIDs (state) {
    return state.bookmarks.map(offer => offer.id)
  },
})

export const accessorType = getAccessorType({
  state,
  actions,
  mutations,
  getters,
})

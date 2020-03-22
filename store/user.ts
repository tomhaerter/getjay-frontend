import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import * as firebase from 'firebase'

export const state = () => ({
  user: undefined as firebase.UserInfo | undefined,
  idToken: '' as string,
  demoMode: false,
  bookmarks: [] as string[],
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

  setBookmarks (state, newBookmarks: string[]) {
    state.bookmarks = newBookmarks
  },
})

export const actions = actionTree({ state, mutations }, {
  async toggleBookmark ({ commit, state }, id: string) {
    await this.$axios.post(`jobOffer/${id}/bookmark`)

    const bookmarks = Array.from(state.bookmarks)
    const index = bookmarks.indexOf(id)
    if (index === -1) {
      bookmarks.push(id)
    } else {
      bookmarks.splice(index, 1)
    }

    commit('setBookmarks', bookmarks)
  },
})

export const accessorType = getAccessorType({
  state,
  actions,
  mutations,
})

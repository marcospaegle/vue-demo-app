import state from '@/store/modules/posts/state'
import actions from '@/store/modules/posts/actions'
import getters from '@/store/modules/posts/getters'
import mutations from '@/store/modules/posts/mutations'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

import * as types from './mutation-types'
// import {playMode} from 'common/js/config'
// import {shuffle} from 'common/js/util'
import {saveSearch, clearSearch, deleteSearch} from 'common/js/cache'

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
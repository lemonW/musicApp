import { loadSearch } from 'common/js/cache'

const state = {
  singer: {},
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}

export default state
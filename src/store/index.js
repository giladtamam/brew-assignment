import { createStore } from 'vuex';

export default createStore({
  state: {
    marketAnalysis: {
      isLoading: false,
      isError: false,
      data: []
    },
    competitveAnalysis: {
      isLoading: false,
      isError: false,
      data: []
    },
    filters: {
      companies: [],
      topics: [],
      verticals: [],
      audiences: [],
      regions: [],
    }
  },
  getters: {
    getMarketAnalysis: state => {
      return state.marketAnalysis.data;
      // return state.marketAnalysis.data.filter(i =>
      //   Object.entries(state.filters).forEach(filter => {
      //     return i[k].includes(v);
      //   })
      // );
    }
  },
  mutations: {
    setMarketAnalysis(state, data = []) {
      state.marketAnalysis.data = data;
    },
    setCompetitiveAnalysis(state, data = []) {
      state.competitveAnalysis.data = data;
    },
    setFilter(state, { key, value }) {
      state.filters[key] = value;
    }
  },
  actions: {
    async fetchMarketAnalysis({ commit }) {
      // using state.filters to fetch filtered data from API
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => commit('setMarketAnalysis', data));
    },
    async fetchCompetitiveAnalysis({ commit }) {
      fetch('/api/competitive-analysis')
        .then(res => res.json())
        .then(data => commit('setCompetitiveAnalysis', data));
    },
    async updateFilter({ commit, dispatch }, { key, value }) {
      commit('setFilter', { key, value });
      dispatch('fetchMarketAnalysis');
    }
  },
  modules: {
  }
})

import shop from '../../api/shop';
import * as types from '../mutation-types';

// initial state
const state1 = {
  all: [],
};

// getters
const getters = {
  allProducts: state => state.all,
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit(types.RECEIVE_PRODUCTS, { products });
    });
  },
};

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS](state, { products }) {
    state.all = products;
  },

  [types.ADD_TO_CART](state, { id }) {
    state.all.find(product => product.id === id).inventory =
    state.all.find(product => product.id === id).inventory - 1;
  },
};

export default {
  state: state1,
  getters,
  actions,
  mutations,
};

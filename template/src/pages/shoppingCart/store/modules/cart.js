import shop from '../../api/shop';
import * as types from '../mutation-types';

// initial state
// shape: [{ id, quantity }]
const state1 = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters1 = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) =>
    state.added.map(({ id, quantity }) => {
      const producted = rootState.products.all.find(product => product.id === id);
      return {
        title: producted.title,
        price: producted.price,
        quantity,
      };
    }),

  cartTotalPrice: (state, getters) =>
    getters.cartProducts.reduce((total, product) =>
      total + (product.price * product.quantity)
      , 0),
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.added];
    commit(types.SET_CHECKOUT_STATUS, null);
    // empty cart
    commit(types.SET_CART_ITEMS, { items: [] });
    shop.buyProducts(
      products,
      () => commit(types.SET_CHECKOUT_STATUS, 'successful'),
      () => {
        commit(types.SET_CHECKOUT_STATUS, 'failed');
        // rollback to the cart saved before sending the request
        commit(types.SET_CART_ITEMS, { items: savedCartItems });
      },
    );
  },
};

// mutations
const mutations = {
  [types.ADD_TO_CART](state, { id }) {
    state.checkoutStatus = null;
    const record = state.added.find(product => product.id === id);
    if (!record) {
      state.added.push({
        id,
        quantity: 1,
      });
    } else {
      state.added.find(product => product.id === id).quantity =
      state.added.find(product => product.id === id).quantity + 1;
    }
  },

  [types.SET_CART_ITEMS](state, { items }) {
    state.added = items;
  },

  [types.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  state: state1,
  getters: getters1,
  actions,
  mutations,
};

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//store method

//Can now use products from central store
//without passing as props
export const store = new Vuex.Store({
  //Strict Mode
  //will only handle changes inside the store
  strict: true,
  state: {
    products: [
      {
        name: "Banana Skin",
        price: 50
      },
      {
        name: "Shiny Bald",
        price: 20
      },
      {
        name: "Green Day",
        price: 15
      },
      {
        name: "Gomu Gomu",
        price: 90
      }
    ]
  },
  //getters
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });

      return saleProducts;
    }
  },
  //Mutations => Can be tracked
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  //Actions
  actions: {
    //payload = params
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  }
});

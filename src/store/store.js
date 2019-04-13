import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//store method

//Can now use products from central store
//without passing as props
export const store = new Vuex.Store({
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
  }
});
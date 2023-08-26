import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  basket: [], // [item1, item2, item3, item1] -- [{item: item1, quantity: 2}, {item: item2, quantity: 1}, {item: item3, quantity: 2}]
  countProductInBasket: 0,
  priceProductInBasket: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, payload) => {
      console.log(payload.payload);
      state.products = payload.payload;
    },
    addBasket: (state, payload) => {
      console.log(payload);

      let flag = false;
      for (let i = 0; i < state.basket.length; i++) {
        console.log(state.basket[i].productItem.item.id);
        if (state.basket[i].productItem.item.id === payload.payload.item.id) {
          flag = true;
          state.basket[i].quantity = state.basket[i].quantity + 1;
          break;
        }
      }
      if (flag === false) {
        state.basket.push({ productItem: payload.payload, quantity: 1 });
      }

      state.countProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );

      state.priceProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.productItem.item.price * obj.quantity,
        0
      );
    },
    removeBasket: (state, payload) => {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].productItem.item.id === payload.payload.item.id) {
          if (state.basket[i].quantity - 1 > 0) {
            state.basket[i].quantity = state.basket[i].quantity - 1;
          } else {
            state.basket[i].quantity = 0;
          }
          break;
        }
      }

      state.countProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );

      state.priceProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.productItem.item.price * obj.quantity,
        0
      );
    },
    removeAllPosition: (state, payload) => {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].productItem.item.id === payload.payload.item.id) {
          state.basket[i].quantity = 0;
          break;
        }
      }

      state.countProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );

      state.priceProductInBasket = state.basket.reduce(
        (acc, obj) => acc + obj.productItem.item.price * obj.quantity,
        0
      );
    },
  },
});

export const { fetchProducts, addBasket, removeBasket, removeAllPosition } =
  productsSlice.actions;

export default productsSlice.reducer;

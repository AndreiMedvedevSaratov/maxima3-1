import { configureStore } from "@reduxjs/toolkit";

import products from "./reducers/products";
import auth from "./reducers/auth";

export const store = configureStore({
  reducer: {
    products: products,
    auth: auth,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

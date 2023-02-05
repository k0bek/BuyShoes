import { configureStore } from "@reduxjs/toolkit";
import handleCartShow from "./handleCartShow";
import cartPart from "./cart-part";

const store = configureStore({
	reducer: { uiShowed: handleCartShow.reducer, cartPart: cartPart.reducer },
});

export default store;

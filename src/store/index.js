import { configureStore } from "@reduxjs/toolkit";
import uiPart from "./ui-part";
import cartPart from "./cart-part";

const store = configureStore({
	reducer: { uiShowed: uiPart.reducer, cartPart: cartPart.reducer },
});

export default store;

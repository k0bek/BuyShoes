import { createSlice } from "@reduxjs/toolkit";

const uiPart = createSlice({
	name: "uiPart",
	initialState: {
		isCartShowed: false,
		isLoaderShowed: true,
	},

	reducers: {
		closeCart(state) {
			state.isCartShowed = false;
		},

		showCart(state) {
			state.isCartShowed = true;
		},
		closeLoader(state) {
			state.isLoaderShowed = false;
		},
	},
});

export default uiPart;
export const uiPartActions = uiPart.actions;

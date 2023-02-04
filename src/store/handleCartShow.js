import { createSlice } from "@reduxjs/toolkit";

const handleCartShow = createSlice({
	initialState: {
		isCartShowed: false,
	},

	closeCart(state) {
		state.isCartShowed = true;
	},

	showCart(state) {
		state.isCartShowed = false;
	},
});

export default handleCartShow;
export const handleCartShowActions = handleCartShow.actions;

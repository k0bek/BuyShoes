import { createSlice } from "@reduxjs/toolkit";

const handleCartShow = createSlice({
	name: "handleCartShow",
	initialState: {
		isCartShowed: false,
	},

	reducers: {
		closeCart(state) {
			state.isCartShowed = false;
			console.log("kurwa");
		},

		showCart(state) {
			state.isCartShowed = true;
		},
	},
});

export default handleCartShow;
export const handleCartShowActions = handleCartShow.actions;

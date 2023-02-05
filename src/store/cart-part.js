import { createSlice } from "@reduxjs/toolkit";

const cartPart = createSlice({
	name: "cartPart",
	initialState: {
		items: [],
		totalPrice: 0,
		totalQuantity: 0,
	},

	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);

			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					name: newItem.name,
					price: newItem.price,
					img: newItem.img,
					id: newItem.id,
					itemAmount: 1,
				});

				state.totalPrice += newItem.price;
			} else {
				state.totalPrice += existingItem.price;
				existingItem.itemAmount++;
			}
		},
	},
});

export default cartPart;
export const handleCartPartActions = cartPart.actions;

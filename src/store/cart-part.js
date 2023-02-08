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

			if (!existingItem) {
				state.items.push({
					name: newItem.name,
					price: newItem.price,
					img: newItem.img,
					id: newItem.id,
					itemAmount: 1,
					totalPriceItem: newItem.price,
				});

				state.totalPrice += newItem.price;
				state.totalQuantity++;

				return;
			} else {
				const cartChange = action.payload.cartChange;

				if (cartChange) {
					existingItem.itemAmount = newItem.itemAmount;
					existingItem.totalPriceItem = newItem.totalPriceItem;

					let totalPrice = 0;
					let totalQuantity = 0;
					for (let item of state.items) {
						totalPrice += item.totalPriceItem;
						totalQuantity += item.itemAmount;
					}

					state.totalPrice = totalPrice;
					state.totalQuantity = totalQuantity;
				} else {
					if (existingItem.itemAmount !== 6) {
						state.totalQuantity++;
					} else {
						return;
					}
					existingItem.totalPriceItem =
						(existingItem.itemAmount + 1) * newItem.price;
					state.totalPrice += existingItem.price;
					existingItem.itemAmount++;
				}
			}
		},

		deleteItem(state, action) {
			const newItem = action.payload;

			state.items = state.items.filter((item) => item.id !== newItem.id);

			state.totalPrice -= newItem.totalPriceItem;
			state.totalQuantity -= newItem.itemAmount;
		},
	},
});

export default cartPart;
export const handleCartPartActions = cartPart.actions;

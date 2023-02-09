import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleCartPartActions } from "./store/cart-part";

function App() {
	const cart = useSelector((state) => state.cartPart);

	useEffect(() => {
		const sendData = async () => {
			console.log(cart.items);

			const response = await fetch(
				"https://title-bedb3-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalPrice: cart.totalPrice,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);

			const data = await response.json();

			return data;
		};

		sendData().catch((error) => {
			throw new Error("Sending data to server failed. Try again!");
		});
	}, [cart]);
	return (
		<div className="App">
			<Modal></Modal>
			<Header />
			<Items />
		</div>
	);
}

export default App;

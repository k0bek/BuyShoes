import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleCartPartActions } from "./store/cart-part";

function App() {
	const dispatch = useDispatch();
	const [isInital, setIsInital] = useState(true);
	const cart = useSelector((state) => state.cartPart);

	useEffect(() => {
		return async () => {
			const fetchData = async () => {
				const response = await fetch(
					"https://title-bedb3-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
				);

				const data = response.json();

				return data;
			};

			try {
				const data = await fetchData();
				console.log(data);
				dispatch(
					handleCartPartActions.replaceItems({
						items: data.items,
						totalQuantity: data.totalQuantity,
						totalPrice: data.totalPrice,
					})
				);
			} catch {
				throw new Error("Fetching data failed");
			}
		};
	}, [dispatch]);

	useEffect(() => {
		const sendData = async () => {
			if (isInital) {
				setIsInital(false);
				return;
			}

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
	}, [cart, isInital]);
	return (
		<div className="App">
			<Modal></Modal>
			<Header />
			<Items />
		</div>
	);
}

export default App;

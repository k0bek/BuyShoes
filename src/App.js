import Header from "./components/organisms/Header/Header";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "./components/atoms/Loader/Loader";
import { uiPartActions } from "./store/ui-part";
import { cartPartActions } from "./store/cart-part";

function App() {
	const dispatch = useDispatch();
	const [isInital, setIsInital] = useState(true);
	const cart = useSelector((state) => state.cartPart);
	const isLoaderShowed = useSelector((state) => state.uiShowed.isLoaderShowed);

	useEffect(() => {
		document.querySelector("body").classList.add("modal-open");

		const fetchData = async () => {
			const response = await fetch(
				"https://title-bedb3-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
			);
			const jsonData = await response.json();
			dispatch(
				cartPartActions.replaceItems({
					items: jsonData.items || [],
					totalQuantity: jsonData.totalQuantity || 0,
					totalPrice: jsonData.totalPrice || 0,
				})
			);
			document.querySelector("body").classList.remove("modal-open");
			dispatch(uiPartActions.closeLoader());
		};

		fetchData().catch((error) => {
			console.error("Error while fetching data:", error);
		});

		return () => {
			document.querySelector("body").classList.remove("modal-open");
		};
	}, [dispatch]);

	useEffect(() => {
		const sendData = async () => {
			if (isInital) {
				setIsInital(false);
				return;
			}

			try {
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
				await response.json();
			} catch (error) {
				console.error("Error while sending data:", error);
			}
		};

		sendData();
	}, [cart, isInital]);

	return (
		<div className={`${"App"} ${"modal-open"}`}>
			<Modal />
			<Header />
			<Items />
			{isLoaderShowed ? <Loader /> : null}
		</div>
	);
}
export default App;

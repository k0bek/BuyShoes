import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();
	const isCartShowed = useSelector((state) => state.isCartShowed);
	return (
		<div className="App">
			{isCartShowed && <Modal></Modal>}
			<Header />
			<Items>
				<ShoeItem />
				<ShoeItem />
				<ShoeItem />
				<ShoeItem />
				<ShoeItem />
				<ShoeItem />
			</Items>
		</div>
	);
}

export default App;

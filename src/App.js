import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const isCartShowed = useSelector((state) => state.uiShowed);

	return (
		<div className="App">
			<Modal></Modal>
			<Header />
			<Items />
		</div>
	);
}

export default App;

import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
import Modal from "./components/molecules/Modal/Modal";
function App() {
	return (
		<div className="App">
			<Modal></Modal>
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

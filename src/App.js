import Header from "./components/organisms/Header/Header";
import ShoeItem from "./components/molecules/ShoeItem/ShoeItem";
import Items from "./components/organisms/Items/Items";
function App() {
	return (
		<div className="App">
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

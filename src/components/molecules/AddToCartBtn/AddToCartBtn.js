import { useDispatch } from "react-redux";
import { cartPartActions } from "../../../store/cart-part";
import Button from "../../atoms/Button/Button";
const AddToCartBtn = ({ type, name, price, img, id }) => {
	const dispatch = useDispatch();
	function addItemToCart() {
		dispatch(
			cartPartActions.addItemToCart({
				name,
				price,
				img,
				id,
			})
		);
	}

	return (
		<Button
			type={type}
			addItemToCart={addItemToCart}
			text={"Dodaj do koszyka"}
		/>
	);
};

export default AddToCartBtn;

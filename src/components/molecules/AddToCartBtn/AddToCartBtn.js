import { useDispatch } from "react-redux";
import styles from "./AddToCartBtn.module.css";
import { handleCartPartActions } from "../../../store/cart-part";
import Button from "../../atoms/Button/Button";
const AddToCartBtn = ({ type, name, price, img, id }) => {
	const dispatch = useDispatch();
	function addItemToCart() {
		dispatch(
			handleCartPartActions.addItemToCart({
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

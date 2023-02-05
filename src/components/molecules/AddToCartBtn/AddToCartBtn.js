import { useDispatch } from "react-redux";
import styles from "./AddToCartBtn.module.css";
import { handleCartPartActions } from "../../../store/cart-part";

const AddToCartBtn = ({ type, name, price, img, id }) => {
	const dispatch = useDispatch();
	console.log(img);
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
		<button type={type} className={styles.btn} onClick={addItemToCart}>
			<span>Dodaj do koszyka</span>
		</button>
	);
};

export default AddToCartBtn;

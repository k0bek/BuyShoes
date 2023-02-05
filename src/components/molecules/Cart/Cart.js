import CartCounter from "../../atoms/CartCounter/CartCounter";
import styles from "./Cart.module.css";
import handleCartShow from "../../../store/handleCartShow";
import { handleCartShowActions } from "../../../store/handleCartShow";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
	const dispatch = useDispatch();

	function showCart() {
		dispatch(handleCartShowActions.showCart());
	}

	return (
		<button className={styles.cart} onClick={showCart}>
			<span>Mój koszyk</span>
			<CartCounter />
		</button>
	);
};

export default Cart;

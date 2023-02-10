import CartCounter from "../../atoms/CartCounter/CartCounter";
import styles from "./Cart.module.css";
import { cartPartActions } from "../../../store/cart-part";
import { uiPartActions } from "../../../store/ui-part";
import { useDispatch } from "react-redux";
const Cart = () => {
	const dispatch = useDispatch();

	function showCart() {
		document.querySelector("body").classList.add("modal-open");
		dispatch(uiPartActions.showCart());
	}

	return (
		<button className={styles.cart} onClick={showCart}>
			<span>Mój koszyk</span>
			<CartCounter />
		</button>
	);
};

export default Cart;

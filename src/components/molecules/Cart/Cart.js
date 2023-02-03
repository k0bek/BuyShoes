import CartCounter from "../../atoms/CartCounter/CartCounter";
import styles from "./Cart.module.css";

const Cart = () => {
	return (
		<div className={styles.cart}>
			<span>My cart</span>
			<CartCounter />
		</div>
	);
};

export default Cart;

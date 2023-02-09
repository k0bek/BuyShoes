import styles from "./CartCounter.module.css";
import { useSelector } from "react-redux";

const CartCounter = () => {
	const cartTotalQuantity = useSelector(
		(state) => state.cartPart.totalQuantity
	);

	return <span className={styles.counter}>{cartTotalQuantity}</span>;
};

export default CartCounter;

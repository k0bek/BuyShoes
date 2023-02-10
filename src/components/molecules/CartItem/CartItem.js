import styles from "./CartItem.module.css";
import Select from "../Select/Select";
import { useDispatch } from "react-redux";
import { cartPartActions } from "../../../store/cart-part";

const CartItem = ({ name, price, img, id, itemAmount, totalPriceItem }) => {
	const dispatch = useDispatch();

	function deleteItem() {
		dispatch(
			cartPartActions.deleteItem({
				id: id,
				totalPriceItem: totalPriceItem,
				itemAmount: itemAmount,
			})
		);
	}
	return (
		<li className={styles.item}>
			<div className={styles.img}>
				<img src={img} className={styles.img}></img>
			</div>
			<div className={styles.desc}>
				<div className={styles["top-box"]}>
					<h3 className={styles.name}>{name}</h3>
					<button className={styles["delete-item-btn"]} onClick={deleteItem}>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</div>
				<p className={styles.amount}>x{itemAmount}</p>
				<p className={styles.price}>{price} zł</p>
				<Select
					name={name}
					price={price}
					id={id}
					itemAmount={itemAmount}
					img={img}
				></Select>
			</div>
		</li>
	);
};

export default CartItem;

import styles from "./CartItem.module.css";
import Select from "../Select/Select";

const CartItem = ({ name, price, img, id, itemAmount, totalPriceItem }) => {
	return (
		<li className={styles.item}>
			<div className={styles.img}>
				<img src={img} className={styles.img}></img>
			</div>
			<div className={styles.desc}>
				<h3 className={styles.name}>{name}</h3>
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

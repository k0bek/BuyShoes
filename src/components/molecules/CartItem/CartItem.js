import styles from "./CartItem.module.css";

const CartItem = ({ name, price, img, id, itemAmount }) => {
	return (
		<li className={styles.item}>
			<div className={styles.img}>
				<img src={img} className={styles.img}></img>
			</div>
			<div className={styles.desc}>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.amount}>x{itemAmount}</p>
				<p className={styles.price}>{price} zł</p>
			</div>
		</li>
	);
};

export default CartItem;

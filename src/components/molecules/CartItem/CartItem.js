import styles from "./CartItem.module.css";
import adidasPredator from "./../../../assets/adidas-predator.jpg";

const CartItem = () => {
	return (
		<li className={styles.item}>
			<div className={styles.img}>
				<img src={adidasPredator} className={styles.img}></img>
			</div>
			<div className={styles.desc}>
				<h3 className={styles.name}>Buty Predator Accurady. 1 SG</h3>
				<p className={styles.amount}>x3</p>
				<p className={styles.price}>1289 zł</p>
			</div>
		</li>
	);
};

export default CartItem;

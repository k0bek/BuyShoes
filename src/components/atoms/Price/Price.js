import styles from "./Price.module.css";

const Price = ({ price, hover }) => {
	console.log(hover);
	return (
		<p
			className={
				hover ? `${styles.price} ${styles["price-hovered"]} ` : styles.price
			}
		>
			{price} zł
		</p>
	);
};

export default Price;

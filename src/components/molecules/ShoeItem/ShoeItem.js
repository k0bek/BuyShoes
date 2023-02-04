import styles from "./ShoeItem.module.css";
import Price from "../../atoms/Price/Price";
import { useState } from "react";
import adidasPredator from "./../../../assets/adidas-predator.jpg";
import adidasPredatorNext from "./../../../assets/adidas-predator-next.jpg";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

const ShoeItem = () => {
	const [hover, setHover] = useState(false);
	const handleHover = () => setHover(!hover);

	return (
		<div
			className={styles["shoe-item"]}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<div className={styles["shoe-img"]}>
				<img src={!hover ? adidasPredator : adidasPredatorNext} />
				<Price price={1189} hover={hover}></Price>
				<AddToCartBtn type="button" />
			</div>
			<ul className={styles.description}>
				<li>
					<h2 className={styles.name}>Buty Predator Accurady. 1 SG</h2>
				</li>
				<li>
					<p className={styles.type}>Piłka Nożna</p>
				</li>
				<div className={styles["is-new-box"]}>
					<li>
						<p className={styles.pitch}>Miękka murawa</p>
					</li>
					<li>
						<p className={styles["is-new"]}>nowość</p>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default ShoeItem;

import styles from "./ShoeItem.module.css";
import Price from "../../atoms/Price/Price";
import { useState } from "react";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { useDispatch } from "react-redux";
import { handleCartPartActions } from "../../../store/cart-part";

const ShoeItem = ({
	name,
	price,
	pitch,
	type,
	mainImg,
	backImg,
	isNew,
	id,
}) => {
	const [hover, setHover] = useState(false);
	const handleHover = () => setHover(!hover);
	return (
		<div
			className={styles["shoe-item"]}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<div className={styles["shoe-img"]}>
				<img src={!hover ? mainImg : backImg} alt={name} />
				<Price price={price} hover={hover}></Price>
				<AddToCartBtn
					type="button"
					name={name}
					price={price}
					img={mainImg}
					id={id}
				/>
			</div>
			<ul className={styles.description}>
				<li>
					<h2 className={styles.name}>{name}</h2>
				</li>
				<li>
					<p className={styles.type}>{type}</p>
				</li>
				<div className={styles["is-new-box"]}>
					<li>
						<p className={styles.pitch}>{pitch}</p>
					</li>
					<li>
						<p className={styles["is-new"]}>{isNew}</p>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default ShoeItem;

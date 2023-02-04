import { React, Fragment } from "react";
import styles from "./CartItems.module.css";

import CartItem from "../../molecules/CartItem/CartItem";
import AddedToCart from "../../atoms/AddedToCart/AddedToCart";

const CartItems = () => {
	return (
		<Fragment>
			<button className={styles.close}>
				<i className="fa-solid fa-xmark"></i>
			</button>
			<AddedToCart></AddedToCart>
			<CartItem></CartItem>
			<div className={styles.boxes}>
				<div className={styles.box}>
					<p>Twój koszyk:</p>
					<p>3 produkty</p>
				</div>
				<div className={styles.box}>
					<p>Cena produktów łącznie:</p>
					<p>2291 zł</p>
				</div>
				<div className={styles.box}>
					<p>Całkowity koszt dostawy:</p>
					<p>Za darmo</p>
				</div>
			</div>
			<div className={styles.box}>
				<p>
					{" "}
					<b>Łącznie</b> (wraz z podatkiem):
				</p>
				<p>
					<b>2291 zł</b>
				</p>
			</div>
		</Fragment>
	);
};

export default CartItems;

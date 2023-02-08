import { React, Fragment } from "react";
import styles from "./CartItems.module.css";

import CartItem from "../../molecules/CartItem/CartItem";
import CartInfo from "../../atoms/CartInfo/CartInfo";
import { handleCartShowActions } from "../../../store/handleCartShow";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
	const cartItems = useSelector((state) => state.cartPart.items);
	const totalPrice = useSelector((state) => state.cartPart.totalPrice);
	const totalQuantity = useSelector((state) => state.cartPart.totalQuantity);

	const dispatch = useDispatch();

	function closeCart() {
		dispatch(handleCartShowActions.closeCart());
	}

	return (
		<Fragment>
			<button className={styles.close} onClick={closeCart}>
				<i className="fa-solid fa-xmark"></i>
			</button>
			{cartItems.length === 0 ? (
				<CartInfo empty={true}>Koszyk jest pusty!</CartInfo>
			) : (
				<Fragment>
					<CartInfo>Dodano do koszyka!</CartInfo>
					<div className={styles.items}>
						{cartItems.map((item) => {
							return (
								<CartItem
									name={item.name}
									price={item.price}
									img={item.img}
									id={item.id}
									itemAmount={item.itemAmount}
									totalPriceItem={item.totalPriceItem}
								/>
							);
						})}
					</div>
					<div className={styles.boxes}>
						<div className={styles.box}>
							<p>Twój koszyk:</p>
							<p>{totalQuantity} produkty</p>
						</div>
						<div className={styles.box}>
							<p>Cena produktów łącznie:</p>
							<p>{totalPrice} zł</p>
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
							<b>{totalPrice} zł</b>
						</p>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default CartItems;

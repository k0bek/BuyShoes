import { Fragment } from "react";
import styles from "./CartInfo.module.css";

const CartInfo = ({ children, empty }) => {
	return (
		<Fragment>
			<p className={styles.added}>{children}</p>
			{empty && (
				<p>
					Jeśli dodasz coś do swojego koszyka, pojawi się to tutaj. Chcesz teraz
					zacząć?
				</p>
			)}
		</Fragment>
	);
};

export default CartInfo;

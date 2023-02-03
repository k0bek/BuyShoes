import styles from "./ShoeItem.module.css";
import Price from "../../atoms/Price/Price";

const ShoeItem = () => {
	return (
		<div className={styles["shoe-item"]}>
			<div className={styles["shoe-img"]}>
				<Price></Price>
			</div>
			<ul className={styles.description}>
				<li>
					<h1 className={styles.name}>Buty Predator Accurady. 1 SG</h1>
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

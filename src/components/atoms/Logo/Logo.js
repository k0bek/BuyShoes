import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={styles["logo-box"]}>
			<span className={styles["logo-img"]}>
				<i className={`fa-regular fa-futbol ${styles.ball}`}></i>
			</span>
			<span className={styles["company-name"]}>FootballShoes</span>
		</div>
	);
};

export default Logo;

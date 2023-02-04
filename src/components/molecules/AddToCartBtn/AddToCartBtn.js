import styles from "./AddToCartBtn.module.css";

const AddToCartBtn = ({ type }) => {
	return (
		<button type={type} className={styles.btn}>
			<span>Dodaj do koszyka</span>
		</button>
	);
};

export default AddToCartBtn;

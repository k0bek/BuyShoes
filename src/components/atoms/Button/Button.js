import styles from "./Button.module.css";

const Button = ({ type, addItemToCart, text }) => {
	return (
		<button type={type} className={`${styles.btn}`} onClick={addItemToCart}>
			<span>{text}</span>
		</button>
	);
};

export default Button;

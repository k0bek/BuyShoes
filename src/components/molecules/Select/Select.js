import styles from "./Select.module.css";
import { handleCartPartActions } from "../../../store/cart-part";
import { useDispatch } from "react-redux";

const Select = ({ name, price, id, itemAmount, img }) => {
	const dispatch = useDispatch();
	return (
		<>
			<select
				name="amount"
				id="amount"
				className={styles.amount}
				onChange={(event) => {
					dispatch(
						handleCartPartActions.addItemToCart({
							name: name,
							price: price,
							img: img,
							id: id,
							itemAmount: Number(event.target.value),
							cartChange: true,
							totalPriceItem: price * Number(event.target.value),
						})
					);
				}}
			>
				<option value="1" selected={itemAmount === 1}>
					1
				</option>
				<option value="2" selected={itemAmount === 2}>
					2
				</option>
				<option value="3" selected={itemAmount === 3}>
					3
				</option>
				<option value="4" selected={itemAmount === 4}>
					4
				</option>
				<option value="5" selected={itemAmount === 5}>
					5
				</option>
				<option value="6" selected={itemAmount === 6}>
					6
				</option>
			</select>
		</>
	);
};
export default Select;

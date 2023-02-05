import styles from "./Items.module.css";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import ShoeItem from "../../molecules/ShoeItem/ShoeItem";
import SHOE_DATA from "../../../data/SHOE_DATA";

const Items = ({ children }) => {
	return (
		<Wrapper>
			<main className={styles.main}>
				{SHOE_DATA.map((shoe) => {
					return (
						<ShoeItem
							name={shoe.name}
							price={shoe.price}
							type={shoe.type}
							pitch={shoe.pitch}
							isNew={shoe.isNew}
							mainImg={shoe.mainImg}
							backImg={shoe.backImg}
							id={shoe.id}
						/>
					);
				})}
			</main>
		</Wrapper>
	);
};

export default Items;

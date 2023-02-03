import styles from "./Items.module.css";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Items = ({ children }) => {
	return (
		<Wrapper>
			<main className={styles.main}>{children}</main>
		</Wrapper>
	);
};

export default Items;

import Cart from "../../molecules/Cart/Cart";
import Logo from "../../atoms/Logo/Logo";
import styles from "./Header.module.css";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Header = () => {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles["header-box"]}>
					<Logo />
					<Cart />
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;

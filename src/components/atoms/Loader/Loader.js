import styles from "./Loader.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Loader = () => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<div className={styles["loader-background"]}>
					<div className={styles.loader}></div>
				</div>,
				document.getElementById("loader")
			)}
		</Fragment>
	);
};
export default Loader;

// <React.Fragment>
// 	{ReactDOM.createPortal(
// 		<ModalBackdrop />,
// 		document.getElementById("backdrop")
// 	)}
// 	{ReactDOM.createPortal(
// 		<ModalOverlay>{children}</ModalOverlay>,
// 		document.getElementById("overlay")
// 	)}
// </React.Fragment>;

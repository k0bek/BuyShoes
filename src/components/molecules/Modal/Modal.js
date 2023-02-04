import ReactDOM from "react-dom";
import React from "react";
import styles from "./Modal.module.css";
import CartItems from "../../organisms/CartItems/CartItems";
function ModalBackdrop({ children }) {
	return <div className={styles.backdrop}>{children}</div>;
}

export function ModalOverlay() {
	return (
		<div className={styles["modal-overlay"]}>
			<CartItems></CartItems>
		</div>
	);
}

function Modal({ children }) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop />,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlay")
			)}
		</React.Fragment>
	);
}

export default Modal;

import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import CartItems from "../../organisms/CartItems/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { uiPartActions } from "../../../store/ui-part";

function ModalBackdrop({ children }) {
	const isModalShowed = useSelector((state) => state.uiShowed.isCartShowed);
	const dispatch = useDispatch();

	function closeCartBackdrop() {
		document.querySelector("body").classList.remove("modal-open");
		dispatch(uiPartActions.closeCart());
	}

	return (
		<Fragment>
			{isModalShowed && (
				<div className={styles.backdrop} onClick={closeCartBackdrop}>
					{children}
				</div>
			)}
		</Fragment>
	);
}

export function ModalOverlay() {
	const isModalShowed = useSelector((state) => state.uiShowed.isCartShowed);

	return (
		<Fragment>
			<div
				className={`${styles["modal-overlay"]} ${
					isModalShowed ? styles["modalIsShowed"] : ""
				}`}
			>
				<CartItems></CartItems>
			</div>
		</Fragment>
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

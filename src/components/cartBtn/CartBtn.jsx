import React from "react";
import CartBadge from "./CartBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartBtn({ onClick }) {
	return (
		<div
			className="rounded-pill d-flex justify-content-center align-items-center
		text-sec bg-main-dark px-5 py-2"
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faCartShopping} />
			<span className="mx-2 fw-bolder">Your Cart</span>
			{true && <CartBadge />}
		</div>
	);
}

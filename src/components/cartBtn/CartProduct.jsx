import React from "react";

export default function CartProduct({ name, price, amount }) {
	return (
		<div>
			<h3>{name}</h3>
			<span>
				{price} X {amount}
			</span>
		</div>
	);
}

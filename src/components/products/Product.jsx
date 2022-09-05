import React from "react";
import { useState, useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Product({ name, description, price, index, onSubmit }) {
	const [amount, setAmount] = useState(1);

	const handleInput = (e) => {
		setAmount(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(index, +amount);
	};

	return (
		<ListGroup.Item className="d-flex justify-content-between">
			<div>
				<div className="h4">{name}</div>
				<div className="text-muted">{description}</div>
				<div className="text-main fw-bolder">{"$" + (+price).toFixed(2)}</div>
			</div>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="amountBtn">Amount: </label>
					<input type="number" value={amount} onChange={handleInput} />
				</fieldset>
				<fieldset className="text-center mt-2">
					<Button type="submit" className="bg-main text-white rounded-pill border-0 px-5">
						+ Add
					</Button>
				</fieldset>
			</form>
		</ListGroup.Item>
	);
}

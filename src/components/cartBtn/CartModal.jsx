import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useCart from "../../context/useCart";
import CartBtn from "./CartBtn";
import CartProduct from "./CartProduct";

function CartModal() {
	const [cart] = useCart();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<CartBtn onClick={handleShow} />

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Your Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{
						Object.entries(cart).map(([,{id, name, price, count}]) => <CartProduct key={id} name={name} price={price} amount={count} />)
					}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Buy
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CartModal;

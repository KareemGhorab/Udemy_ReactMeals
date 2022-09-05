import React from "react";
import Badge from "react-bootstrap/Badge";
import useCart from "../../context/useCart";

export default function CartBadge() {
	const [, , , getCnt] = useCart();

	return <Badge className="bg-main px-3 py-2 rounded-pill">{getCnt()}</Badge>;
}

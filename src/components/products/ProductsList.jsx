import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useCart from "../../context/useCart";
import Product from "./Product";

const products = [
	{ id: 1, name: "Flafel", price: 0.5, description: "Yuuuumy" },
	{ id: 2, name: "Sushi", price: 22.99, description: "Fine fish and veggies" },
	{ id: 3, name: "Burger", price: 12.99, description: "Meaty" },
	{ id: 4, name: "Green Bowl", price: 18.99, description: "Green and healthy" },
];

function ProductList() {
	const [, addToCart] = useCart();

	const handleProductAddition = (index, amount) => {
		addToCart(products[index], amount)
	}

	return (
		<div className="d-flex justify-content-center my-5">
			<Card className="p-3">
				<ListGroup variant="flush">
					{products.map((element, index) => {
						const { id, name, price, description } = element;
						return (
							<Product
								key={id}
								name={name}
								price={price}
								description={description}
								index = {index}
								onSubmit={handleProductAddition}
							/>
						);
					})}
				</ListGroup>
			</Card>
		</div>
	);
}

export default ProductList;

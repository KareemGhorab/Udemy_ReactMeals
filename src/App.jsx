import ProductList from "./components/products/ProductsList";
import { CartProvider } from "./context/useCart";
import MyNavbar from "./layout/navbar/MyNavbar";

function App() {
	return (
		<>
			<CartProvider>
				<MyNavbar />
				<ProductList />
			</CartProvider>
		</>
	);
}

export default App;

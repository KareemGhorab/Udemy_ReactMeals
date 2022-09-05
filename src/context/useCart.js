import { createContext, useContext, useState } from "react";

const cartContext = createContext();

const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState({});

	const addProduct = (product, amount) => {
		if (amount < 1) {
			return;
		}
		const id = product.id;
		setCart((prevCart) => {
			if (prevCart[id]) {
				return {
					...prevCart,
					[id]: { ...prevCart[id], count: prevCart[id].count + amount },
				};
			} else {
				return {
					...prevCart,
					[id]: { ...product, count: amount },
				};
			}
		});
	};

	const removeProduct = (id) => {
		setCart((prevCart) => {
			if (!prevCart[id]?.count) {
				return prevCart;
			}
			return {
				...prevCart,
				[id]: { ...prevCart[id], count: prevCart[id].count - 1 },
			};
		});
	};

	const getProductsCnt = () => {
		let acc = 0;
		for (const key in cart) {
			acc += cart[key].count;
		}
		return acc;
	};

	return (
		<cartContext.Provider
			value={[cart, addProduct, removeProduct, getProductsCnt]}
		>
			{children}
		</cartContext.Provider>
	);
};

export default useCart;

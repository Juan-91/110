import { useState } from 'react';
import DataContext from './DataContext';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ userId: 123, name: "Juan" });

    function addProductToCart(product) {
        console.log("global add");

        let copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function removeProductFromCart() {

    }

    function clearCart() {

    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removerProductFromCart: removeProductFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;
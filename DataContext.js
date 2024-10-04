import { createContext } from 'react';

/* 
Context is the blueprint/interface
no implementaion
*/

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => { },
    removeProductFromCart: () => { },
    clearCart: () => { },
});

export default DataContext;
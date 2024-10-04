import { useContext, useState } from 'react';
import './Product.css';
import Quantity from './Quantity';
import DataContext from '../state/DataContext';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    const addToCart = useContext(DataContext).addProductToCart;

    function add() {
        let prod = { ...props.data, quantity: quantity };
        addToCart(prod);
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product page">
            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>
            <div className="prices">
                <label className='price'>Price <br /> <span><b>${(+props.data.price).toFixed(2)}</b></span></label>
                <label className='total'>Total <br /> <span><b>${getTotal()}</b></span></label>
            </div>
            <div className="controls">
                <Quantity onChange={handleQuantity}></Quantity>

                <button className="btn btn-sm btn-success" onClick={add}>
                    Add
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </button>
            </div>
        </div>
    );
}

export default Product;
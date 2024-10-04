import { useState } from 'react';
import './Quantity.css';

function Quantity(props) {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        if (quantity == 0) return;

        let value = quantity - 1;
        setQuantity(value);
        props.onChange(value);
    }

    function handleIncrease() {
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    }


    return (
        <div className="quantity">
            <button className="btn btn-sm btn-dark" disabled={quantity == 0} onClick={handleDecrease}>-</button>

            <label>{quantity}</label>

            <button className="btn btn-sm btn-dark" onClick={handleIncrease}>+</button>

        </div>
    );
}

export default Quantity;


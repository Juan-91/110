import { Link } from 'react-router-dom';
import "./Cart.css";
import DataContext from '../state/DataContext';
import { useContext } from 'react';


function Cart() {
    const { cart } = useContext(DataContext);

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }
        return total.toFixed(2);
    }

    return (
        <div className="cart page">
            <h1>Got Everything?</h1>
            <h4>You have <span>{cart.length}</span> item(s) in your cart.</h4>

            <div className="parent">
                <div className="list">

                    {
                        cart.length == 0 ?

                            <div className="alert alert-primary btn-outline-dark">
                                <Link to="/catalog">
                                    <h5><button>Click here to go to catalog and get products!
                                    </button></h5>
                                </Link>
                            </div>
                            : null
                    }

                    {cart.map((prod) => (
                        <div className="prod-cart">
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label><b>Price:</b> ${prod.price}</label>
                            <label className='qty'><b>Qty:</b> <br></br>{prod.quantity}</label>
                            <label><b>Total:</b> ${(prod.quantity * prod.price).toFixed(2)} </label>
                            <button className='btn btn=+-sm btn-outline-danger'>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    ))}
                </div >

                {
                    cart.length > 0 ?
                        <div className="side">
                            <h4>Total
                                <br></br>${getTotal()}
                            </h4>

                            <button className='btn btn-primary'>Proceed to Payment</button>
                        </div>
                        : null
                }
            </div >
        </div >
    );

}

export default Cart;
import Product from '../components/Product';
import './Catalog.css';
import DataService, { categories } from '../services/DataServices';
import { useEffect, useState } from 'react'

function Catalog() {
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState([]);

    async function loadData() {
        let data = await DataService.getProducts();
        setProducts(data);
    }

    //when page loads
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="catalog page">
            <h2><b>Our Catalog</b></h2>

            <div className="filters">
                <button className='btn btn-small btn-outline-light' onClick={() => setFilter("")}> All</button>

                {categories.map((cat =>
                    <button className="btn btn-small btn-outline-light" onClick={() => setFilter(cat)}> {cat}</button>
                ))}
            </div>

            {products.filter(prod => filter == "" || prod.category == filter).map((prod) => (
                <Product data={prod}></Product>
            ))}

        </div >
    );
}

export default Catalog;





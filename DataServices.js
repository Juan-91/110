import axios from 'axios';

export const catalog = [
    {
        "title": "Apple",
        "image": "/images/Apple_1.jpg",
        "price": 0.79,
        "category": "Fruit",
        "_id": "123451"
    },
    {
        "title": "Milk",
        "image": "/images/Milk_1.jpg",
        "price": 2.99,
        "category": "Dairy",
        "_id": "123452"
    },
    {
        "title": "Onion",
        "image": "/images/Onion_1.jpg",
        "price": 0.99,
        "category": "Vegetables",
        "_id": "123453"
    },
    {
        "title": "Gatorade",
        "image": "/images/Gatorade_1.jpg",
        "price": 1.99,
        "category": "Beverages",
        "_id": "123454"
    },
    {
        "title": "Bread",
        "image": "/images/Bread_1.jpeg",
        "price": 3.89,
        "category": "Bakery",
        "_id": "123455"
    },
    {
        "title": "Meat",
        "image": "/images/Meat_1.jpg",
        "price": 8.99,
        "category": "Meats",
        "_id": "123456"
    }
];


export const categories = ['Fruit', 'Vegetables', 'Beverages', 'Dairy', 'Meats', 'Bakery'];

class DataService {
    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

export default new DataService();
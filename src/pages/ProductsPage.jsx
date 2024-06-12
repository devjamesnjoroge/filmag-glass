import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router
import './ProductsPage.css'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

// Sample product data
const products = [
    { id: 1, title: 'Product 1', image: 'https://pbs.twimg.com/media/F5m2Zj4XkAE5ILy?format=jpg&name=large' },
    { id: 2, title: 'Product 2', image: 'https://pbs.twimg.com/media/F5m2Tq0WkAA30p6?format=jpg&name=900x900' },
    { id: 3, title: 'Product 3', image: 'https://pbs.twimg.com/media/F0qwxV4aYAAwf4U?format=jpg&name=large' },
    // Add more products as needed
];

function ProductsPage() {
    return (
        <>
        <Navbar />
        <div className="products">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
}

export default ProductsPage;

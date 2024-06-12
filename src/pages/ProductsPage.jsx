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
    { id: 4, title: 'Product 4', image: 'https://pbs.twimg.com/media/F0qihshWIAEpobA?format=jpg&name=medium' },
    { id: 5, title: 'Product 5', image: 'https://pbs.twimg.com/media/F0qumj5aIAA2BH-?format=jpg&name=large' },
    { id: 6, title: 'Product 6', image: 'https://pbs.twimg.com/media/FmlmewCaEAIP9du?format=jpg&name=large' },
    { id: 7, title: 'Product 7', image: 'https://pbs.twimg.com/media/Fmlm2MfacAIBThv?format=jpg&name=large' },
    { id: 8, title: 'Product 8', image: 'https://pbs.twimg.com/media/Fo3m21daQAAyHbb?format=jpg&name=large' },

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

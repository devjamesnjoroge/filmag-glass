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
    { id: 9, title: 'Product 9', image: 'https://pbs.twimg.com/media/Fmlm7gWagAA_7Go?format=jpg&name=large'},
    { id: 10, title: 'Product 10', image: 'https://pbs.twimg.com/media/FmlnDxTacAIdBWS?format=jpg&name=large'},
    { id: 11, title: 'Product 11', image: 'https://pbs.twimg.com/media/Fo3nuofakAEoI7I?format=jpg&name=small'},
    { id: 12, title: 'Product 12', image: 'https://pbs.twimg.com/media/Fo3n2HraQAAzFP9?format=jpg&name=large'},
    { id: 13, title: 'Product 13', image: 'https://pbs.twimg.com/media/FmPy2pXaEAMY5Gt?format=jpg&name=large'},
    { id: 14, title: 'Product 14', image: 'https://pbs.twimg.com/media/FmPqSMbakAQbE9C?format=jpg&name=large'},
    { id: 15, title: 'Product 15', image: 'https://pbs.twimg.com/media/FmPqIrXaYAAfQqw?format=jpg&name=large'},
    { id: 16, title: 'Product 16', image: 'https://pbs.twimg.com/media/FmPqFXfagAA8kQr?format=jpg&name=large'},
    { id: 17, title: 'Product 17', image: 'https://pbs.twimg.com/media/FmPp5ubaYAAVmty?format=jpg&name=large'},
    { id: 18, title: 'Product 18', image: 'https://pbs.twimg.com/media/FmIZWcgaUAc4wxa?format=jpg&name=medium'},
    { id: 19, title: 'Product 19', image: 'https://pbs.twimg.com/media/FmIZDihagAI8QWU?format=jpg&name=medium'},
    { id: 20, title: 'Product 20', image: 'https://pbs.twimg.com/media/FmIYZTHaAAEDiXZ?format=jpg&name=medium'},
    { id: 21, title: 'Product 21', image: 'https://pbs.twimg.com/media/FmIYArgaMAAPG4b?format=jpg&name=medium'},
    { id: 22, title: 'Product 22', image: 'https://pbs.twimg.com/media/FmBSJA8aUAADbW1?format=jpg&name=large'},
    { id: 23, title: 'Product 23', image: 'https://pbs.twimg.com/media/FmBSDnKaEAExqXE?format=jpg&name=large'},
    { id: 24, title: 'Product 24', image: 'https://pbs.twimg.com/media/FmBRbu3acAMZlvD?format=jpg&name=large'},
    { id: 25, title: 'Product 25', image: 'https://pbs.twimg.com/media/FmBRSGsaYAILaMe?format=jpg&name=large'},
    
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

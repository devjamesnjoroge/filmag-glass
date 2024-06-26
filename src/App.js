import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage/>} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import '../../styles/ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;


// Whenever you need to import these components elsewhere in your project use:
// import ProductCard from './components/ProductCard/ProductCard.jsx';
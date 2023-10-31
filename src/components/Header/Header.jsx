import React from 'react';
import '../../styles/Header.css';
import '../../assets/images/Shredibles-3 2.jpg'

function Header() {
    return (
        <div className="header">
            <img src="(logo)" alt="Shredibles Logo" className="header-logo" />
            <h1>Shredibles</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
        </div>
    );
}

export default Header;



// Whenever you need to import these components elsewhere in your project use:
// import Header from './components/Header/Header.jsx';
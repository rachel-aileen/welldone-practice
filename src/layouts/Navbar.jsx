import React, { useState } from 'react';

export default function Navbar() {
    // State to manage menu visibility
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    return (
        <div className='navbar'>
            <a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/bloomboxx-16513.appspot.com/o/welldoneLogo.png?alt=media&token=7dfa7208-77ad-4468-a1a0-7238d2bddc4e" className='logo' alt="welldoneLogo" /></a>
            <div className='navigation'>
                {/* Toggling visibility based on state */}
                <ul className={`menu ${isMenuVisible ? 'show' : ''}`}>
                    <div className="close-btn" onClick={() => setIsMenuVisible(false)}></div>
                    <li className="menu-item"><a href="index.html">Home</a></li>
                    <li className="menu-item"><a href="about.html">About</a></li>
                    <li className="menu-item"><a href="services.html">Services </a></li>
                    <li className="menu-item"><a href="fees.html">Fees</a></li>
                    <li className="menu-item"><a href="forms.html" className="active">Forms</a></li>
                    <li className="menu-item"><a href="contact.html">Contact</a></li>
                </ul>
                <div className="menu-btn" onClick={toggleMenu}></div>
            </div>
        </div>
    );
}


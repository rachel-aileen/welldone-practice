import { DragHandle, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

export default function Navbar() {
    // State to manage menu visibility
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    return (
        <div className='navbar'>
            <a href="/">
                <h1 className='logo'>Welldone</h1>
            </a>
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


                <IconButton onClick={toggleMenu} className='menuBtn'>
                    <Menu className='menuIcon' />
                </IconButton>



                {/* <img src="https://firebasestorage.googleapis.com/v0/b/bloomboxx-16513.appspot.com/o/menuBtn.png?alt=media&token=bf0d09c3-2e80-4d6d-af77-37ce95c7e144" className="menu-btn" onClick={toggleMenu} alt="Menu" /> */}
            </div>
        </div>
    );
}


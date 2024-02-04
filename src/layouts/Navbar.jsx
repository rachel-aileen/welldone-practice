import { Close, Menu } from '@mui/icons-material';
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
                <ul className={`menu ${isMenuVisible ? 'active' : 'hidden'}`}>
                    {/* <div className="close-btn" onClick={() => setIsMenuVisible(false)}></div> */}
                    <li className="menu-item"><a href="index.html">Home</a></li>
                    <li className="menu-item"><a href="about.html">About</a></li>
                    <li className="menu-item"><a href="services.html">Services </a></li>
                    <li className="menu-item"><a href="fees.html">Fees</a></li>
                    <li className="menu-item"><a href="forms.html" className="active">Forms</a></li>
                    <li className="menu-item"><a href="contact.html">Contact</a></li>
                </ul>

                <IconButton onClick={toggleMenu} className='menuBtn'>
                    {!isMenuVisible &&
                        <Menu className='menuIcon' />
                    }
                    {isMenuVisible &&
                        <Close className='menuIcon' />
                    }
                </IconButton>



            </div>
        </div>
    );
}


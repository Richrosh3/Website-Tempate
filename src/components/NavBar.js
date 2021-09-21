//////////////////////////////////////////////////////////////////////
//                          NAVIGATION BAR                          //
//////////////////////////////////////////////////////////////////////
//    This file is to customize text in the top Navigation Bar     //
//////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiWinkSmile } from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'
import { IconContext } from 'react-icons/lib'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <BiWinkSmile className='navbar-icon' />
                            Your Name
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hobbies" className="nav-links" onClick={closeMobileMenu}>
                                    Hobbies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavBar


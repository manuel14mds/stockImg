'use client'
import React, { useState } from 'react'

import AdminBtn from './AdminBtn/AdminBtn'
import CartIcon from './CartIcon/CartIcon'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import UserMenu from './UserMenu/UserMenu'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <Logo />
                    
                    <div className={`md:flex items-center space-x-3 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                        <NavLinks />
                        <UserMenu />
                        <CartIcon />
                        <AdminBtn />
                    </div>
                    
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-500 hover:text-green-500 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <NavLinks mobile={isMenuOpen} />
            </div>
        </nav>
    )
}

export default NavBar

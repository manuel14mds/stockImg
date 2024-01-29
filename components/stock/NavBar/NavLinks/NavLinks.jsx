import React from 'react'

function NavLinks({ mobile }) {
    return (
        <div className={`md:flex items-center space-x-1 ${mobile ? 'flex flex-col' : 'hidden'}`}>
            <a href="/" className="py-4 px-2 text-green-500">Inicio</a>
            <a href="/" className="py-4 px-2 text-green-500">Categorías</a>
            <a href="/" className="py-4 px-2 text-green-500">Imágenes</a>
        </div>
    )
}

export default NavLinks

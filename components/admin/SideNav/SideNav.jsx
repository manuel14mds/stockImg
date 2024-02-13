import React from 'react'
import Link from 'next/link'

function SideNav() {
    return (
        <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-36 bg-gray-800">
            <div className="flex-grow">
                <ul className="flex flex-col mt-6">
                    <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                        <Link href="/admin">Home</Link>
                    </li>
                    <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                        <Link href="/admin/imagenes">Imagenes</Link>
                    </li>
                    <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav

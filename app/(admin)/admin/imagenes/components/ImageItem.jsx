'use client'
import { useState } from "react";

function ImageItem({image}) {
    console.log(image)
    const [visibleMenu, setVisibleMenu] = useState(null);

    const toggleMenu = (id) => {
        setVisibleMenu(visibleMenu === id ? null : id);
    };
    return (
        <tr key={image.id} className="border-b">
            <td className="px-4 py-2">{image.id}</td>
            <td className="px-4 py-2">{image.title}</td>
            <td className="px-4 py-2">${image.priceBase.toFixed(2)}</td>
            <td className="px-4 py-2">{image.active ? 'Sí' : 'No'}</td>
            <td className="px-4 py-2">{image.author}</td>
            <td className="px-4 py-2">
                <button onClick={() => toggleMenu(image.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Acciones
                </button>
                {visibleMenu === image.id && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Editar</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Eliminar</a>
                    </div>
                )}
            </td>
        </tr>
    )
}

export default ImageItem

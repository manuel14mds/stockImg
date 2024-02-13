'use client'
import React, { useState } from 'react'

export default function AddImage() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [archivo, setArchivo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para agregar la imagen, como enviarla a un backend
        const request =  await fetch("http://localhost:3000/api/images",{
            method:'POST',
            headers:{'Content-Type': 'application/json',},
            body:JSON.stringify({ titulo, descripcion, archivo }),
        })
        const response = await request.json()
        console.log(response)

    };

    const handleFileChange = (e) => {
        setArchivo(e.target.files[0]);
    };
    return (
        <div className="p-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Agregar Nueva Imagen</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                            type="text"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">Seleccionar Imagen</label>
                        <input
                            type="file"
                            id="archivo"
                            onChange={handleFileChange}
                            required
                            className="mt-1 block w-full"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700">Agregar Imagen</button>
                </form>
            </div>
        </div>
    )
}

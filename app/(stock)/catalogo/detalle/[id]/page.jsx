'use client'

import { useState } from "react"
import ImgDetail from "../componets/ImgDetail";
import LicenseSelector from "../componets/LicenceSelector";


function Detail({ params }) {

    const {id} = params
    const imageDetail = {
        imageUrl: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1700615784/content-items/014/585/948/image-1920x1080%2520%25281%2529-original.jpg?1700615784',
        title: 'Título de la Imagen',
        author: 'Autor de la Imagen',
        description: 'Esta es una descripción detallada de la imagen. Aquí puedes incluir cualquier información relevante sobre la imagen, incluyendo el contexto, la inspiración detrás de la imagen, o cualquier otro detalle interesante.',
        availability: true,
        licenses: [
            { type: 'Standard', price: 10.00 },
            { type: 'Comercial', price: 50.00 }
        ]
    };

    const [selectedLicense, setSelectedLicense] = useState(imageDetail.licenses[0]);

    return (

        <div className="bg-gray-100 p-4">
        <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
                

                <ImgDetail imageDetail={imageDetail}/>
                <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
                    <h2 className="text-2xl font-bold">{imageDetail.title} id: {id}</h2>
                    <p className="text-sm text-gray-500">Autor: {imageDetail.author}</p>
                    <p className="mt-2">{imageDetail.description}</p>
                    <p className="mt-2">Disponibilidad: {imageDetail.availability ? 'Disponible' : 'No Disponible'}</p>
                    <LicenseSelector licenses={imageDetail.licenses} selectedLicense={selectedLicense} setSelectedLicense={setSelectedLicense} />
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Comprar Licencia</button>
            </div>
        </div>
    </div>
    )
}

export default Detail

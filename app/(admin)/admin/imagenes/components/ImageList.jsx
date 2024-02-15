'use client'

import { useEffect, useState } from "react"
import ImageItem from "./ImageItem"

function ImageList() {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/api/images')
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((data) => {
                setImages(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar las imágenes:", error);
                setLoading(false);
            });
    }, []);
    
    return (
        <>
            {
                loading?
                <h1>Cargando imagenes...</h1>
                :
                images.map((image) => (
                    <ImageItem image={image} key={image.id} />
                    ))
                }
        </>
    )
}

export default ImageList


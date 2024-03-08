'use client';

import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';

function ImageGrid({ category = 'todas' }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/api/images')
            .then((response) => response.json())
            .then((data) => {
                const filteredImages = category === 'todas'
                    ? data
                    : data.filter((image) => image.category === category);

                setImages(filteredImages);
            })
            .catch((error) => {
                console.error('Error al cargar las imágenes:', error);
                setImages([]); 
            })
            .finally(() => setLoading(false)); 
    }, [category]); 

    if (loading) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    if (images.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <h2>No hay imagenes para la categoría: {category}</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
}

export default ImageGrid;

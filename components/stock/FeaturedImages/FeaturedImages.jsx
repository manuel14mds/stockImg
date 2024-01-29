import React from 'react'
import Image from 'next/image'

function FeaturedImages({images}) {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-5">Imágenes Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <Image src={image.url} alt={image.title} className="w-full h-auto object-cover object-top aspect-square" width={200} height={200} />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm text-gray-600">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedImages

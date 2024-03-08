'use client'
import Image from "next/image"
import { useState } from "react";
import ImageModal from "./ImageModal";
import Link from "next/link";

function ImageCard({ image }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src={image.url} alt={image.title} className="w-full h-auto object-cover object-top aspect-square" onClick={openModal} width={100} height={100} />
            <ImageModal imageUrl={image.url} isOpen={isModalOpen} onClose={closeModal} />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
                <p className="text-sm text-gray-800">${image.priceBase}</p>
            </div>
            <div className="p-4 flex justify-between">
                <Link href="/catalogo/detalle/2" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">detalle</Link>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">agregar al carrito</button>
            </div>
        </div>
    )
}

export default ImageCard

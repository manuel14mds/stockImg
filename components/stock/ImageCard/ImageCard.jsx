import Image from "next/image"
function ImageCard({ image }) {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src={image.url} alt={image.titulo} className="w-full h-auto object-cover object-top aspect-square" width={100} height={100} />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{image.titulo}</h3>
                <p className="text-sm text-gray-600">{image.descripcion}</p>
                <p className="text-sm text-gray-800">${image.precio}</p>
            </div>
        </div>
    )
}

export default ImageCard

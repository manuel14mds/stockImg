import Image from "next/image"


function ImageModal({ imageUrl, isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-2 rounded-lg shadow-lg relative" style={{ width: '80%', height: '80%' }}>
                <Image src={imageUrl} alt="Imagen ampliada" layout="fill" objectFit="contain" />
                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-white bg-red-500 hover:bg-red-700 rounded-full p-2">
                    X
                </button>
            </div>
        </div>
    )
}

export default ImageModal

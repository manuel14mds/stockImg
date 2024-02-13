
import Image from "next/image"
import { useState } from "react";
import ImgModal from "./ImgModal";
function ImgDetail({ imageDetail }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { imageUrl, title } = imageDetail


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <Image src={imageUrl} alt={title} className="w-full md:w-1/2 h-auto object-cover rounded-lg cursor-pointer" onClick={openModal} width={100} height={100} />
            <ImgModal imageUrl={imageUrl} isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default ImgDetail

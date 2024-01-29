import React from 'react'

function Slide({ image, title, description }) {
    return (
        <div className="flex flex-col justify-center items-center text-center aspect-video bg-no-repeat bg-cover bg-center text-white" style={{ backgroundImage: `url(${image})` }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-md">{description}</p>
            </div>
        </div>
    )
}

export default Slide

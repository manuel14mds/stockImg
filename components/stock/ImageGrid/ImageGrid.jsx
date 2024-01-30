import ImageCard from "../ImageCard/ImageCard"

function ImageGrid({ images, category }) {
    let filteredImages = images;

    if (category) {
        if (category !== 'todas') {
            filteredImages = images.filter(image => image.categoria === category);
        }
    }

    return (
        <div className="container mx-auto p-4">
            {filteredImages.length === 0 ?
                <h2>No hay imagenes para la categoría: {category}</h2>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map(image => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            }
        </div>
    );
}


export default ImageGrid

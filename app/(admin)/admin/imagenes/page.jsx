import Link from "next/link"
import ImageItem from "./components/ImageItem"


const Imagenes = async () =>  {

    const response = await fetch('http://localhost:3000/api/images')
    const images = await response.json()

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Lista de Imágenes (Admin)</h2>
                <Link href="/admin/imagenes/agregar" >Agregar nueva imagen</Link>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Título</th>
                                <th className="px-4 py-2 text-left">Precio</th>
                                <th className="px-4 py-2 text-left">Activo</th>
                                <th className="px-4 py-2 text-left">Autor</th>
                                <th className="px-4 py-2 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {images.map((image) => (
                                <ImageItem image={image} key={image.id}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Imagenes

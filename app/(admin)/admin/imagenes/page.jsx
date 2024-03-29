import Link from "next/link"
import ImageList from "./components/imageList"

const Imagenes = () =>  {

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Lista de Imágenes (Admin)</h2>
                <Link href="/admin/imagenes/agregar" >
                    <button className="mb-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Agregar nueva imagen +</button>
                    </Link>
                    <br />
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
                            <ImageList />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Imagenes

import Link from "next/link"

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600">Página no encontrada</p>
                <p className="mt-4 text-gray-600">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
                <Link href="/">
                    <p className='text-white'>kewdhfwekjdnkjew</p>
                    <a className="inline-block px-6 py-3 mt-6 text-sm font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">Volver al inicio</a>
                </Link>
            </div>
        </div>
    )
}

export default NotFound

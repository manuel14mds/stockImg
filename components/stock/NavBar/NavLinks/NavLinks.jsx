import Link from "next/link"

function NavLinks({ mobile }) {
    return (
        <div className={`md:flex items-center space-x-1 ${mobile ? 'flex flex-col' : 'hidden'}`}>
            <Link href="/" className="py-4 px-2 text-green-500">Inicio</Link>
            <Link href="/catalogue/todas" className="py-4 px-2 text-green-500">Imágenes</Link>
        </div>
    )
}

export default NavLinks

import Link from "next/link"

export const metadata = {
    title: "Stock Image auth",
    description: "Stock authentication",
};

function NavLinks({ mobile }) {
    return (
        <div className={`md:flex items-center space-x-1 ${mobile ? 'flex flex-col' : 'hidden'}`}>
            <Link href="/" className="py-4 px-2 text-green-500 cursor-pointer">Inicio</Link>
            <Link href="/catalogo/todas" className="py-4 px-2 text-green-500 cursor-pointer">Imágenes</Link>
        </div>
    )
}

export default NavLinks

import Link from "next/link"

function CategoryNav() {
    return (
        <div className="bg-gray-200 p-4">
            <ul className="flex space-x-4 overflow-x-auto justify-center">
                <li className="whitespace-nowrap"><Link href="/catalogue/todas" className="text-blue-600 hover:underline">Todas</Link></li>
                <li className="whitespace-nowrap"><Link href="/catalogue/ilustracion" className="text-blue-600 hover:underline">Ilustracion</Link></li>
                <li className="whitespace-nowrap"><Link href="/catalogue/fotografia" className="text-blue-600 hover:underline">Fotografía</Link></li>
            </ul>
        </div>
    )
}

export default CategoryNav

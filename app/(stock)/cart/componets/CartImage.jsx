import Link from 'next/link'
import Image from 'next/image'

function CartImage({item}) {
    return (
        <div className="flex justify-between items-center py-3">
            <Image src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" width={100} height={100} />

            <div className="flex-grow">
                <p className="font-semibold">{item.title}</p>
                <p>${item.price}</p>
            </div>
            <button className="text-red-500 hover:text-red-700">Eliminar</button>
            <Link href={`/products/${item.id}`}><button className="text-blue-500 hover:text-blue-700 ml-4">Detalles</button></Link>
        </div>
    )
}

export default CartImage

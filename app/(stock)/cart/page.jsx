import CartImage from './componets/CartImage';

const cartItems = [
    { id: 1, title: 'Producto 1', price: 10.00, imageUrl: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1700615784/content-items/014/585/948/image-1920x1080%2520%25281%2529-original.jpg?1700615784' },
    { id: 2, title: 'Producto 2', price: 15.00, imageUrl: 'https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_hyper_realistic_ultra_detailed_photograph_of_a_woman_s_1_6d8066d4-4036-4de0-a215-98461459e598_1.jpeg' },
    // Añade más productos según sea necesario
];

function Cart() {

    return (
        <div className="bg-gray-100 p-4">
            <div className="container mx-auto max-w-3xl bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
                <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                        <CartImage key={item.id} item={item}/>
                    ))}
                </div>
                <div className="mt-4">
                    <p>Total Items: 2</p>
                    <p>Total a Pagar: $25.00</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Eliminar Todos</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Cart

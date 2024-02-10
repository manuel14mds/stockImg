import Link from "next/link"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-2 mt-1 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" id="password" name="password" required className="w-full p-2 mt-1 border rounded-md" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700">Iniciar Sesión</button>
                </form>
                <button className="w-full px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Autenticación con Google</button>
                
                <Link href="/auth/register" className="w-full">
                    <button className="w-full px-4 py-2 mt-2 font-bold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Registrarse</button>
                </Link>
            </div>
        </div>
    )
}

export default Login

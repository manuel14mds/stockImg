import Link from 'next/link'

function NavBar() {
    return (
        <nav className='bg-white mb-1 p-5 flex gap-1'>
            <p>go</p>
            <Link href="/" className='cursor-pointer'>Home</Link>
        </nav>
    )
}

export default NavBar
